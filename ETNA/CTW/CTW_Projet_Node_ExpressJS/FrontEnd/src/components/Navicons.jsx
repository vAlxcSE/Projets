import { useNavigate , Link } from 'react-router-dom'
import { useState } from 'react';
import cart from '../public/cart.png';
import notif from '../public/notification.png';
import profil from '../public/profile.png';
import PopoverLog from '../components/PopoverLog';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'

"use client"



const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false);  

    const navigate = useNavigate()

    //Temporaire
    const isLoggedIn = false

    const handleProfile = (e) => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
        setIsProfileOpen(prev =>!prev)
        }
    };

    // const handleLogout = () => {
    //     setIsLoading(true);
    //     // Ajoutez ici la logique de déconnexion
    //     setTimeout(() => {
    //         setIsLoading(false);
    //         setIsProfileOpen(false);
    //         router.push(logoutUrl);
    //     };
    //         // Logique supplémentaire après la déconnexion
    //     }, 2000); // Simule un délai de déconnexion
    // };
    
    return ( 
        <div className="relative flex items-center gap-4 xl:gap-6">
            <Popover className="relative">
        <PopoverButton className="cursor-pointer">
          <img 
          src={profil} 
          alt="Profil" 
          width={22} 
          height={22} 
          class="cursor-pointer"/>
        </PopoverButton>
        <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="absolute z-20 w-48 p-4 mt-2 bg-white rounded-md shadow-lg left-0 top-12">
            <div className="p-3">
              <Link to='/profile' className="block rounded-lg py-2 px-3 transition hover:bg-gray-100">
                <p className="font-semibold text-black">Mon Profil</p>
              </Link>
            </div>
            <div className="p-3 cursor-pointer">
              <p className="font-semibold text-black">Déconnexion</p>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
            {/* <img 
                src={profil}
                alt=""
                width={22}
                height ={22}
                className="cursor-pointer"
                onClick={handleProfile}
                
            />
            <PopoverLog/>

            {/* {isProfileOpen && (
                // <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                //     <Link to='/profil'>Profil</Link>
                //     <div className="mt-2 cursor-pointer" onClick={handleLogout}>
                //         {isLoading ? "Logging out" : "Logout"}
                //     </div>
                // </div>
                <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                {/* <Link to='/profil' className="block text-black">
                    Profil
                </Link> */}
                {/* <div className="mt-2 cursor-pointer text-black" onClick={handleLogout}>
                    {isLoading ? "Logging out" : "Logout"}
                </div> */}
            {/* </div>
            )} */}
            <img 
                src={notif}
                alt="" 
                width={22} 
                height={22} 
                className="cursor-pointer"
            />
            <div className="relative cursor-pointer">
                <img 
                    src={cart}
                    alt="" 
                    width={22} 
                    height={22} 
                    className="cursor-pointer"
                    onClick={() => setIsCartOpen((prev) => !prev)}
                />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">2</div>
            </div>
            {isCartOpen && <CartModal />}
            
        </div>
    )
}

export default NavIcons
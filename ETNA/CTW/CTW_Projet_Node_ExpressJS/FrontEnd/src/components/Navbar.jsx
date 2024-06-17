import { Link } from "react-router-dom";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./Navicons";
import logo from '../public/shoes-logo.png';

const Navbar = () => {
      return (
      <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/* Mobile */}
            <div className="h-full flex items-center justify-between md:hidden">
                  <Link href='/'>
                        <div className="text-2xl tracking-wide">ECM</div>
                  </Link>
            <Menu/>
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                  {/* LEFT */}
                  <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                              <Link href='/' className="flex items-center gap-3">
                                    <img src={logo} alt="" width={160} height ={160} />
                                    <div className="text-2xl tracking-wide">ECOM</div>
                              </Link>
                        <div className="hidden xl:flex gap-4">
                              <Link href='/'>Accueil</Link>
                              <Link href='/'>Boutique</Link>
                              <Link href='/'>A propos de nous</Link>
                              <Link href='/'>Nous contacter</Link>
                        </div>
                  </div>

                  {/* RIGHT */}
                  <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                        
                        <SearchBar/>
                        <NavIcons/>
                  </div>
                        
            </div>
      </div>
      )
}

export default Navbar
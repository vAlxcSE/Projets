"use client"
import { Link } from "react-router-dom";
import { useState } from "react";
import menu from '../public/menu.png';

const Menu = () => {

    const [open,setOpen] = useState(false)



    return ( 
    <div className=""> 
        <img src ={menu}
        alt="" 
        width={28} 
        height ={28} 
        className="cursor-pointer" 
        onClick={()=>setOpen(prev => !prev)}
        />{
            open && (
                <div className=''>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Shop</Link>
                    <Link href='/'>Deals</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>Logout</Link>
                    <Link href='/'>Cart(1)</Link>
                </div>
                )
            }
        </div>
    )
}

export default Menu
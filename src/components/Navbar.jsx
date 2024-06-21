import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonDigging, faXmark} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx";
import { Outlet,Link } from 'react-router-dom';

const Navbar = () =>{
    const[isSideMenuOpen,setMenu]=useState(false);

    return(
        <>
        <nav className="container">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <p className="cursor-pointer ">
                        <span className="font-extrabold text-[#33333] hover:text-[#fafafa] sm:text-4xl text-3xl font-sans">Ad*</span>
                    </p>
                <div className="hidden w-full md:block md:w-auto mr-3 text-lg" id="targetE1">
                    <ul className="font-medium hidden md:flex gap-20">
                        <li className="">
                            <Link to="/About" className="block py-2 px-3 hover:text-[white]" aria-current="page">About</Link>
                        </li>
                        <li className="" >
                            <Link to="/Project" className="block py-2 px-3 hover:text-[white]" aria-current="page">Projects</Link>
                        </li>
                        <li className="">
                            <button className="border-2 border-[white] text-[white] font-semibold rounded-b-xl rounded-ss-3xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:bg-[white] hover:text-[black] duration-200"><Link to="#" className="block py-2 px-3 rounded cursor-none">Contact</Link></button>
                        </li>
                    </ul>
                    </div>
                    <button onClick={()=>setMenu(true)} className="text-3xl md:hidden hover:text-[white]">
                        <FontAwesomeIcon icon={faPersonDigging} className=""/>
                    </button>
                {/*Creating Nav-dail Js */}

                <div id="nav-dial" className={clsx(
                    "fixed md:hidden h-full bg-black/70 backdrop-blur-lg top-0 left-0 p-12 mx-auto z-90 w-full -translate-x-full transition-all duration-350 delay-200",
                    isSideMenuOpen && "translate-x-0"
                )}>
                    <section className="text-[19px] flex-col absolute right-0 top-0 h-screen p-12 gap-8 z-50 flex rounded-sm">
                        <div className="flex justify-between">
                            {/* <p className="text-blueBerry cursor-pointer font-bold ml-12 pl-3 text-2xl">
                            LOGO
                            </p> */}
                            <button className="ml-10 md:hidden cursor-pointer text-3xl hover:text-[red]" onClick={()=>setMenu(false)}>
                            <FontAwesomeIcon icon={faXmark}/>
                            </button>
                        </div>
                        <div className="mt-12 items-center text-[black]">
                            <button className="m-3 p-3 block hover:bg-[#fafafa] rounded-lg"><Link to="/About" className="font-medium">About</Link></button>
                            <button className="m-3 p-3 block hover:bg-[#fafafa] rounded-lg"><Link to="/Project" className="font-medium">Profile</Link></button>
                            <button className=" m-3 p-3 block hover:bg-[#fafafa] rounded-lg"><Link to="#" className="font-medium">Contact</Link></button>
                        </div>
                    </section>
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}
export default Navbar;
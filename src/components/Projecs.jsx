import React from "react";
import { SiHomeassistantcommunitystore, SiPexels } from "react-icons/si";
import { Link } from "react-router-dom";

const Projecs = ()=>{
    return(
        <>
        <main className="w-[100%] h-[100vh] bg-gradient-to-r from-[white] to-[#a3a3a4] grid justify-center">
            <div className='flex justify-center my-1'>
                <div data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="100">
                    <Link to='/'>
                        <button className='font-bold font-stick text-[black] rounded-xl text-xl shadow-lg sm:mb-0 mb-5 p-2 hover:text-[white] border-2 rounded-b-xl rounded-ss-3xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-200 flex text-center'>
                            <SiHomeassistantcommunitystore />
                        </button>
                    </Link>
                </div>
            </div>
            <section data-aos="zoom-out"data-aos-duration="1500" data-aos-delay="100" className=" w-[80vw] h-[80vh] bg-[#a3a3a4] shadow-2xl rounded-3xl shadow-primary flex justify-center items-center border-8">
                <div className="grid grid-rows-3 justify-center items-center rounded-3xl">
                    <div className="row-start-1 flex justify-center items-center" data-aos="fade-left"data-aos-duration="2000" data-aos-delay="100">
                        <p className="sm:text-8xl text-5xl font-extrabold text-[#1a1a1a] font-stick uppercase">Coming Soon</p>
                    </div>
                    <div className="row-start-2 h-[80%] w-[100%] bg-[#0D0C0B]">
                    </div>
                    <div className="row-start-3 flex justify-center items-center" data-aos="fade-right"data-aos-duration="2000" data-aos-delay="100">
                        <p className="sm:text-8xl text-5xl font-extrabold text-[#1a1a1a] font-stick uppercase">Stay Tuned</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
export default Projecs;
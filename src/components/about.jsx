import React, { Component } from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import { Outlet,Link } from 'react-router-dom';
import { SiHomeassistantcommunitystore, SiPexels } from "react-icons/si";
import { FaGithub, FaMedium, FaTwitter } from 'react-icons/fa6';
import {MdEmail} from "react-icons/md";
import ActionAreaCard from '../components/Card';


const About = () =>{

    const [dot] = useTypewriter({
        words:['Snapper','Blogger','Athlete','Developer'],
        loop:{},
        typeSpeed:250,
        deleteSpeed:200,
    });
    return(
        <>
            <main className='w-[100%] grid justify-center bg-[rgb(13,13,13)] cursor-default'>
            <div className='flex justify-center relative top-3 mb-3 h-[20px]'>
                        <div className='' data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="100">
                            <Link to='/'>
                                <button className='font-bold font-stick text-[#d27236] rounded-xl text-xl shadow-lg sm:mb-0 p-2 hover:bg-[#fafafa] border-2 rounded-b-xl rounded-ss-3xl transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 flex text-center'>
                                    <SiHomeassistantcommunitystore />
                                </button>
                            </Link>
                        </div>
                    </div>
                <section className='w-[300px] lg:min-h-svh sm:w-[80vw] md:h-fit  bg-[#1a1a1a] shadow-2xl shadow-[#5da629] opacity-85 rounded-3xl mt-10' data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="100">  
                        <div className='flex flex-col justify-center items-center'>
                            <div className=''>
                                <div className="border-[white]  rounded-3xl shadow-in lg:p-6 sm:p-6 p-6 shadow-[#fafafa]">
                                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row cursor-default">
                                        <img src="./public/WhatsApp Image 2024-05-24 at 10.04.09 AM.jpeg" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300 object-cover" />
                                        <div className="flex flex-col">
                                            <h4 className="text-3xl font-semibold text-center md:text-left font-stick text-[#4a9726fc]">Ashish Dhiman</h4>
                                            <p className="text-[white] font-semibold">Live it to the Fullest.</p>
                                            <p className='text-[white]'>Hello Everyone! I welcome you. I love front-end Development, hours and hours it takes for the whole research and to create a map to move towards the final goal, scribbling and more. Apart from coding, I am a guy who loves spending time with nature. whatever I learn, just write it in the 'Medium. Explore my blogs in medium. 
                                            This is a lil about me. let's explore more together.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center pt-4 space-x-4 items-center text-[#fafafa]">
                                        <a rel="noopener noreferrer" href="https://github.com/ashishdhiman0473" target='blank' aria-label="GitHub" className="p-2 rounded-md">
                                            <FaGithub className='text-xl hover:text-[black] hover:bg-[white] hover:rounded-xl'/>
                                        </a>
                                        <a rel="noopener noreferrer" href="https://medium.com/@ashishdhimanad7" target='blank' aria-label="Medium" className="p-2 rounded-md">
                                            <FaMedium className='text-xl hover:text-[#1b6e1b]'/>
                                        </a>
                                        <a rel="noopener noreferrer" href="https://www.pexels.com/@ashish-dhiman-511514562/" target='blank' aria-label="Twitter" className="p-2 rounded-md">
                                            <SiPexels className='text-xl hover:text-[#2a9769] hover:bg-[white] hover:rounded-sm'/>
                                        </a>
                                        <a rel="noopener noreferrer" href="mailto:ashishdhimanad7@gmail.com" target='blank' aria-label="Email" className="p-2 rounded-md">
                                            <MdEmail className='text-xl hover:text-[#e94545]'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className=''>
                                    <span className='text-[#d27236] font-semibold'>When I'm Free</span>
                                </div>
                                {/*   */}
                                <div className='sm:mb-0 md:mb-2 lg:mb-1 lg:w-[500px]  h-[110px] sm:pt-5 sm:flex lg:flex-row flex flex-col justify-stretch items-center'>
                                    <span className='text-xl sm:text-7xl font-stick font-extrabold text-[#fafafa]'>I'm a</span>
                                    <span className=''></span>
                                    <span className='justify-self-start sm:ml-2 text-7xl font-stick font-extrabold text-[rgb(49,115,18)]'>{dot}</span>
                                </div>
                            </div>
                            <div className=' m-10 flex justify-center items-center'>
                                <ActionAreaCard className=''/>
                            </div>
                        </div>
                </section>
            </main>
        </>
    )
};

export default About;
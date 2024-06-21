import React from 'react'; 
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Navbar from "./Navbar";
import { FaLinkedin, FaSquareInstagram, FaMedium } from "react-icons/fa6";
import gradient from 'gradient-string';

const Landing = () =>{

    const [dot] = useTypewriter({
        words:['........'],
        loop:{},
        typeSpeed:250,
        deleteSpeed:200,
    });
let instagradient = gradient([
    {color:'#f9ce34',pos:0},
    {color:'#ee2a7b',pos:0.5},
    {color:'#6228d7',pos:1}
]);

    return(
        <>
        <main className="text-[#333333]">
            <section className='relative max-h-[710px] md:w-auto bg-[rgb(238,103,103)] md:mx-10 w-[320px] rounded-xl shadow-2xl md:py-2 md:px-4  sm:mt-5 md:mb-5 shadow-primary sm:w-full mx-auto lg:mb-10' data-aos="zoom-out" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="50">
                <Navbar/>
                <div className='sm:text-left pt-2 md:place-items-center'>
                    <div className="sm:grid sm:grid-cols-4 gap-20 sm:mx-8 flex-col">
                        <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000" className='items-left md:my-3 sm:text-left uppercase col-span-2'>
                            <p className='text-5xl sm:text-7xl lg:text-8xl px-3 tracking-tighter font-extrabold mx-3 cursor-default sm:min-w-full max-w-[200px]'>HY! I'M</p>
                            <div className='hover:text-[rgb(0,0,0)] sm:max-w-full md:shadow-2xl max-w-[350px]'>
                                <p className='text-6xl lg:text-8xl md:text-7xl tracking-tighter px-2 font-extrabold mx-3 sm:max-w-full cursor-default max-w-[200px]'>ASHISH</p>
                                <p className='text-6xl lg:text-8xl md:text-7xl tracking-tighter px-2 font-extrabold mx-3 sm:max-w-full cursor-default max-w-[200px]'>dhiman</p>
                            </div>
                            <button className='sm:mx-6 sm:px-3 sm:pr-4 sm:my-4 my-5 px-2 mx-4 text-[white] sm:text-[20px] lg:text-[30px] text-[15px] tracking-tighter cursor-grabbing font-bold border-2 pr-3 rounded-3xl py-1'><span className='bg-fontGreen sm:h-5 sm:w-5 h-4 w-4 inline-flex rounded-xl sm:mr-2 mr-1'></span> Available for work</button>
                        </div>
                        <div className='sm:mt-10 sm:flex-row col-span-2 col-start-3 max-w-[300px] sm:text-left cursor-default ml-10 mt-12 justify-self-start lg:text-center' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100" data-aos-easing="ease-out">
                            <p className='ml-12 pl-7 md:text-right font-semibold sm:text-3xl sm:m-5 text-right mx-5'>I create</p>
                            <p className='font-extrabold tracking-tighter lg:text-9xl text-7xl hover:text-[black] md:text-[#333333] lg:min-w-full'>Website Designs</p>
                            <p className='font-bold tracking-tighter font-sans leading-tight md:text-right text-[15px] sm:text-[19px] mt-6 collapse sm:visible lg:w-[450px]'>Let my journey inspire yours. Dive in and explore the artistry and vision that drive my work.</p>
                        </div>  
                        <div className='sm:max-w-[370px] sm:max-h-[50px] relative sm:col-span-2 sm:visible invisible'>
                            <div className=''>
                                <p className='font-bold  tracking-tighter font-sans leading-tight text-[20px] ml-6 sm:text-left sm:bottom-10 sm:relative md:relative md:-top-10'>Welcome to my portfolio, where creativity converges with adventure{dot}</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 md:col-start-3  lg:relative md:mt-10 sm:top-5  lg:left-20 md:-top-10 text-center relative -top-20'>
                            <div className='sm:hidden text-xl  font-semibold mb-4 relative md:-top-5 -top-5'>
                                <p>Connect with me</p>
                                </div>
                            <div className='flex md:gap-10 lg:gap-12 mt-8 sm:relative sm:bottom-10 justify-between text-4xl relative -top-5'>
                                <button className='lg:text-[3rem] text-[#ffffff] hover:text-[#691326] mx-5'><a href='https://www.instagram.com/ashish_dhiman04/' target='blank'>
                                <FaSquareInstagram className='lg:text-[3rem] rounded-b-xl rounded-ss-2xl transition ease-in-out delay-550 hover:-translate-y-1 hover:scale-100 duration-450'/></a>
                                </button>
                                <button className='lg:text-[3rem]  text-[white] hover:text-[#0A66C2] mx-5'><a href='https://www.linkedin.com/in/ashishdhiman0407' target='blank'>
                                    <FaLinkedin className='rounded-b-xl rounded-ss-2xl transition ease-in-out delay-550 hover:-translate-y-1 hover:scale-100 duration-450'/></a>
                                </button>
                                <button className='lg:text-[3rem]  text-[white] hover:text-[#00ab6c] mx-5'><a href='https://medium.com/@ashishdhimanad7' target='blank'>
                                    <FaMedium className=' transition ease-in-out delay-550 hover:-translate-y-1 hover:scale-100 duration-450'/></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* hero component to input the image into the landing page */}
            </section>
        </main>
        </>
    );
}

export default Landing;

                        {/*Button styling below*/}

                        {/* <div className='md:mx-12 md:my-8 md:py-12 max-sm:text-center'>
                            <button className="rounded-lg p-3 border-2 font-mono my-12 font-bold border-fontGreen mx-4 hover:text-fontGreen"><a href ="#" >Projects</a></button>
                            <button className="rounded-lg p-3 border-2 mx-6 font-mono my-12 font-bold hover:border-blueBerry"><a href ="https://www.linkedin.com/in/ashishdhiman0407/" className='hover:text-blueBerry' target='_blank'>Linkedin</a></button>
                        </div> */}
                                                    {/* <span  className='text-purple leading-0 text-[2rem] text-left px-3 uppercase'>{text}</span> */}
                            {/* <Cursor/> */}
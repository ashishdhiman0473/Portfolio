import * as React from 'react';
import { FaPenNib, FaUserNinja } from 'react-icons/fa6';
import { MdNaturePeople } from 'react-icons/md';

export default function ActionAreaCard() {
  return (
    <div className='flex flex-col justify-center items-center lg:flex lg:flex-row md:justify-between md:items-start md:mx-auto gap-5' data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="200">
        <div className='rounded-lg border-2 border-[#fafafa] hover:shadow-[rgb(250,250,250)] hover:shadow-lg sm:max-w-[350px] lg:max-h-[400px] sm:max-h cursor-pointer' >    
            <div className='p-5'>
                <div className='sm:grid sm:justify-center'>
                    <FaPenNib className='text-blueBerry shadow-blueBerry shadow-lg'/>
                </div>
                <span className='mb-2 text-2xl font-bold tracking-tight text-[#317312]'>
                    Blogger
                </span>
                <p className='mb-3 font-normal text-[#fafafa]'>Watch and Wait and then React.</p>
                <span className='text-[#fafafa]'>This is what defines me better. Analyzing is important to calculate the minimalistic blunders in the pitch of life. Waiting to get ready with the best solution during the whole adventure of solitude is a moral lapse. Yet the time of reaction has arrived. React accordingly with serenity.</span>
            </div>
        </div>
        <div className='border-2 border-[#fafafa] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[#fafafa] hover:shadow-lg sm:max-w-[350px] lg:max-h-[400px] sm:max-h cursor-pointer'>    
            <div className='p-5'>
            <div className='grid justify-center text-fontGreen'>
                <MdNaturePeople className='text-fontGreen shadow-lg shadow-fontGreen'/>
            </div>    
                <span className='mb-2 text-2xl font-bold text-[#317312]'>
                    Biophile
                </span>
                <p className='mb-3 font-normal text-[white] '>Nature attracts me</p>
                <span className='text-[#fafafa]'>Green lands with blue sky, lying on the peak with clouds floating is what I like. Being captivated by all the jewels of flora and fauna. The chirping of birds to the mewl of cats to the trumpet of elephants to whistles of aquatic life. I love being connected to the earth.</span>
            </div>
        </div>
        <div className='border-2 border-[#fafafa] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[#fafafa] hover:shadow-lg sm:max-w-[350px] lg:max-h-[400px] sm:max-h cursor-pointer'>
            <div className='p-5'>
                <div className='grid justify-center'>
                    <FaUserNinja className='text-[#fafafa] shadow-lg shadow-[white]'/>
                </div>    
                <span className='mb-2 text-2xl font-bold tracking-tight text-[#317312]'>
                    Athlete
                </span>
                <p className='mb-3 font-normal text-[white]'>Run! Run! Run!</p>
                <span className='text-[white]'>"Till you reach the endpoint, keep pushing. This is exactly what I've learned by playing almost all sports. It's not about winning; it's about the way you play to win. Keeping the mind quiet and letting the brain take over the game is imperative. Sport is detachable part of my life.</span>
            </div>
        </div>
    </div>
    
  );
}

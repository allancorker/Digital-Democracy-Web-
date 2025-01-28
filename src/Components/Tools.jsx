import React from 'react'
import Mapeo from '../assets/dd-mapeo.png'
import EDT from '../assets/dd-EDT.png'
import Terrastories from '../assets/dd-Terrastories.png'

const Tools = () => {
  return (
    <div className='text-center text-gray-700 w-[80%] mx-auto md:pt-18'>
      <div className='md:w-[75%] mx-auto'>
      <h2 className='text-3xl font-bold '>Our Tools</h2>
        <p className='text-xl pt-4 pb-10'>At Digital Democracy we build tools in solidarity with frontline communities. <br />
        Our frontline partners represent marginalized communities worldwide, including Indigenous Peoples and ethnic minorities, whose human rights are most severely impacted by environmental abuse.</p>

        <button className='ml-6 text-xl text-blue-700 p-3 border-2 border-blue-700 rounded-sm hover:bg-blue-700 hover:text-white ease-in-out duration-500 my-8'>More About Our Mission</button>
      </div>

      {/* Images section / Links section */}
      <div className='md:w-[100%] mx-auto flex-col md:flex md:flex-row mt-10 gap-10 mb-10'>
          <div className='rounded-md cursor-pointer hover:opacity-35 bg-blue-200 md:w-[450px] h-[350px] overflow-hidden mb-8'>
            <p className='text-xl font-bold text-black'></p>
            <a href="#">
              <img src={Mapeo} alt="Image 1" className='object-contain h-[450px] w-[280px] mx-auto pt-[15px] hover:h-[420px] ease-in-out duration-500'/>
            </a>
          </div>

          <div className='rounded-md cursor-pointer hover:opacity-35 bg-blue-100 md:w-[450px] h-[350px] overflow-hidden mb-8'>
            <p className='text-xl font-bold text-black'></p>
            <a href="#">
              <img src={EDT} alt="Image 2" className='object-contain h-[450px] w-[280px] mx-auto pt-[5px] hover:h-[420px] ease-in-out duration-500'/>
            </a>
          </div>

          <div className='rounded-md cursor-pointer hover:opacity-35 bg-pink-100 md:w-[450px] h-[350px]  overflow-hidden mb-8'>
              <p className='text-xl font-bold text-black'></p>
              <a href="/">
                <img src={Terrastories} alt="Image 3" className='object-contain h-[450px] w-[280px] mx-auto pt-[5px] hover:h-[360px] ease-in-out duration-500'/>
              </a>
            </div>
        
      </div>

      {/* Section 2 */}
      <div  className='md:flex md:flex-row w-[100%] mb-8 pb-4'>
        <div className='text-left md:pl-0 pb-4'>
            <h2 className='text-2xl font-bold text-left'>Mapeo</h2>
            <p className='text-[18px] '>Mapeo is a free digital toolset for documenting, monitoring and mapping many types of data.</p>
        </div>
        <div className='text-left md:pl-0 pb-4 md:w-[650px]'>
            <h2 className='text-2xl font-bold text-left'>Earth Defenders Toolkit (EDT)</h2>
            <p className='text-[18px] '>A collaborative space providing resources and training materials for communities defending critical ecosystems around the world.</p>
        </div>
        <div className='text-left md:pl-6 pb-4'>
            <h2 className='text-2xl font-bold text-left'>Terrastories</h2>
            <p className='text-[18px] '>An application for communities to map, protect, and share stories about their land.</p>
        </div>

      </div>

      {/* Section 3 */}
      <div className='bg-green-800 md:py-16 md:px-14 py-8 px-7 mb-20 rounded-md text-white text-left'>
        <p className='md:text-5xl font-bold '>Join the global movement to <br /> defend human rights and protect <br /> critical ecosystems</p>
        <button className='md:text-xl py-4 px-6 bg-orange-600 rounded-md hover:bg-blue-700 hover:text-white ease-in-out duration-700 mt-12'>Make a Donation</button>
      </div>
        
    </div>
  )
}

export default Tools
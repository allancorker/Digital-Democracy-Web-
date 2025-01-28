import React from 'react'
import MissionImg from '../assets/dd-mission.png'

const Mission = () => {
  return (
    <div className='md:columns-2 lg:w-[80%] mx-auto'>
        {/* Left Div / Column */}
        <div className='text-gray-700 m-6 pt-16'>
            <h1 className='text-4xl font-bold pt-6 px-6 '>Our Mission</h1>
            <p className='text-[16px] text-gray-900 p-6 '>Digital Democracy’s mission is to work in solidarity with frontline communities to use technology to defend their rights and fight climate change. As technology becomes cheaper and more accessible, we believe it can and should be used to bring more voices to the table. Digital Democracy helps our partners achieve transformative change and works toward a world where all people can participate in decisions that govern their lives.</p>

            <button className='ml-6 text-xl text-blue-700 p-3 border-2 border-blue-700 rounded-sm hover:bg-blue-700 hover:text-white ease-in-out duration-500 '>More About Our Mission</button>
        </div>

        {/* Right Div / Column */}
        <div className='pt-10 items-center'>
            <img src={MissionImg} alt="Mission Image" className='object-contain p-8 border-none rounded-md'/>
        </div>
    </div>
  )
}

export default Mission
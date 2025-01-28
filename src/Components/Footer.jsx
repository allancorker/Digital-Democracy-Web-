import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='md:grid md:grid-cols-2 md:w-[80%] mx-auto justify-between pt-8'>

        <div className='md:p-4 p-6'>
          <p className='md:text-3xl text-xl font-bold bg-blue-700 md:w-[75px] w-[60px] p-4'><a href="">Dd</a></p>

          {/* Links / Social Media Hanldes */}
          <h3 className='md:text-2xl text-xl pt-16'>Find Us</h3>
          <div className='flex gap-8 py-4'>
            <FontAwesomeIcon icon={faFacebook} className='md:size-8 size-6 cursor-pointer ] rounded-xl hover:text-gray-400 ease-in-out duration-500'/>
            <FontAwesomeIcon icon={faTwitter} className='md:size-8 size-6 cursor-pointer ] rounded-xl hover:text-gray-400 ease-in-out duration-500'/>
            <FontAwesomeIcon icon={faInstagram} className='md:size-8 size-6 cursor-pointer ] rounded-xl hover:text-gray-400 ease-in-out duration-500'/>
            <FontAwesomeIcon icon={faEnvelope} className='md:size-8 size-6 cursor-pointer ] rounded-xl hover:text-gray-400 ease-in-out duration-500'/>
          </div>
        </div>

        {/* Column 2 */}
        <div className='md:pt-6 pt-8 md:pl-0 pl-6 text-[16px] font-semibold md:pb-8'>
          <p>Digital Democracy is a non-profit building decentralized technology hand-in-hand with Indigenous partners.</p>

          <div className='md:flex md:gap-8 pl-1 pt-12'>
            <ul className='md:flex md:gap-4 pt-2'>
              <li className='hover:border-b-2 w-[90px] pt-3 hover:border-white cursor-pointer duration-300 ease-in-out'>Our Work</li>
              <li className='md:list-disc hover:border-b-2 w-[100px] pt-3 hover:border-white cursor-pointer duration-300 ease-in-out'>Get Involved</li>
              <li className='md:list-disc hover:border-b-2 w-[90px] pt-3 hover:border-white cursor-pointer duration-300 ease-in-out'>Our Team</li>
              <li className='md:list-disc hover:border-b-2 w-[90px] pt-3 hover:border-white cursor-pointer duration-300 ease-in-out'>Contact Us</li>
              <li className='md:list-disc hover:border-b-2 w-[90px] pt-3 hover:border-white cursor-pointer duration-300 ease-in-out'>Blog</li>
            </ul>

            <ul>
             <li className='md:list-disc mt-3 bg-orange-500 w-[90px] rounded-sm py-2 px-4 hover:bg-blue-500 ease-in-out duration-700 cursor-pointer'>Donate</li>
            </ul>
          </div>

          <div className='pt-10 pb-2'>
            <h3>Subscribe for Updates</h3>
            <input type='email' placeholder='Email Address' className='py-2 md:w-[400px] w-[375px] text-black rounded-sm font-normal pl-4 mt-2' /> 
            <button className='bg-black py-[5px] px-4 rounded-sm hover:bg-white hover:text-blue-600 ease-in-out duration-700 md:translate-x-[-105%] translate-x-[-105%]'><a href="">Submit</a></button>

          </div>

          <a href="" className='font-normal md:text-[15px] text-[12px] hover:underline ease-in-out duration-500 '>Want a peek? Newsletter Archive</a>

        </div>

      </div>

      <div className='md:text-[18px] w-[80%] mx-auto text-center pb-10 pt-4'>
        <p>Copyright &copy; 2025 Digital Democracy. All rights reserved. <br /> Redesigned by Allan Corker</p>
      </div>

    </div>
  )
}

export default Footer
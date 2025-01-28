import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='flex bg-pink-900 text-white justify-center text-sm md:text-[14px] lg:text-[16px]'>
      <p className='py-4 font-medium'>Digital Democracy is now Awana Digital <span className='text-orange-600 font-300 cursor-pointer hover:border-b-2 hover:border-b-orange-400 hover:text-orange-500 ease-in-out duration-150'>Learn More</span></p>
      <FontAwesomeIcon icon={faLongArrowRight} className='my-5 px-1'/>
    </div>
  )
}

export default Header
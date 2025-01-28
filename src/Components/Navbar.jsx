import React, { useState } from 'react'
import Logo from '../assets/dd-logo.png'
import HeroImg from '../assets/free-pexel-map.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faClose} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  // Function for the nav
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
      setNav(!nav)
  }
  return (
  <>
    <div className='bg-blue-950'>
      <div className='flex lg:w-[80%] md:w-[100%]  mx-auto justify-between'>
          {/* Logo Div */}
        <div className='lg:'>
          <a href="">
            <img src={Logo} alt="Logo" className='absolute object-contain h-20 md:h-24 lg:h-28'/>
          </a>
        </div>

        {/* Links Div */}
        <div className='text-white font-semibold ml-60 text-[18px]'>
          <ul className='md:flex hidden gap-8'>
            <li className='hover:border-b-4 pt-14 cursor-pointer duration-150 ease-in-out'><a href="">Our Work</a></li>
            <li className='hover:border-b-4 pt-14 cursor-pointer duration-150 ease-in-out'><a href="">Our Tools</a></li>
            <li className='hover:border-b-4 pt-14 cursor-pointer duration-150 ease-in-out'><a href="">Get Involved</a></li>
            <li className='hover:border-b-4 pt-14 cursor-pointer duration-150 ease-in-out'><a href="">About</a> <FontAwesomeIcon icon={faChevronDown}/></li>
            <li className='hover:border-b-4 pt-14 cursor-pointer duration-150 ease-in-out'><a href="">Blog</a></li>
            <li className='bg-orange-500 pt-14 pb-4 px-4 mr-2 border-none rounded-b-sm cursor-pointer'><a href="">Donate</a></li>
          </ul>
        </div>

        {/* Responsive Menu / Side bar */}
        <div onClick={handleNav} className='cursor-pointer md:hidden py-10 pr-2'>
          { nav ? <FontAwesomeIcon icon={faClose} className='text-white size-8'/> : <FontAwesomeIcon icon={faBars} className='text-white size-8'/>}
        </div>

        <div className={ nav ? 'absolute text-white font-semibold text-[18px] left-0 top-0 w-[90%] h-[100%] pl-10 bg-blue-950 ease-in-out duration-500' : 'absolute left-[-100%]'}>


            <div className='pt-8'>
              <a href="">
                <img src={Logo} alt="Logo" className='absolute object-contain h-20 md:h-24 lg:h-28'/> 
              </a> 
            </div>
            <ul className=''>
              <li className='pt-28 hover:border-b w-[80px] cursor-pointer duration-300 ease-in-out'><a href="">Our Work</a></li>
              <li className='pt-8 hover:border-b w-[80px] cursor-pointer duration-300 ease-in-out'><a href="">Our Tools</a></li>
              <li className='pt-8 hover:border-b w-[105px] cursor-pointer duration3050 ease-in-out'><a href="">Get Involved</a></li>
              <li className='pt-8 hover:border-b w-[75px] cursor-pointer duration-300 ease-in-out'><a href="">About</a> <FontAwesomeIcon icon={faChevronDown}/></li>
              <li className='pt-8 hover:border-b w-[40px] cursor-pointer duration-300 ease-in-out'><a href="">Blog</a></li>
              <li className='pt-8 hover:border-b w-[65px] cursor-pointer duration-300 ease-in-out'><a href="">Donate</a></li>
            </ul>

        </div>
        
      </div>

      {/* Text Area (Hero Section) */}
      <div>
      <p className='text-6xl text-center text-white font-semibold
      pt-48 pb-16 mx-auto'>We partner with earth defenders to co-develop technology for social justice</p>
      </div>

    </div>

     {/* Image Section */}
     <div>
      <img src={HeroImg} alt="hero" className='w-full h-[350px] md:h-[450px] object-cover object-center'/>
    </div>
  
  </>
  )
}

export default Navbar
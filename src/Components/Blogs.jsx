import React from 'react'
import Awana from '../assets/dd-Awana.png'
import Kakawa from '../assets/dd-Kakawa.png'
import Proximete from '../assets/dd-proximete.png'
import Comingsoon from '../assets/dd-comingsoon.png'
import Daughters from '../assets/dd-daughters.jpg'

const Blogs = () => {
  return (
    <div className='md:w-[80%] md:mx-40 mx-5 text-gray-700 pt-20 pb-10'>
        <div className='flex justify-between border-b-[1px] border-b-gray-400'>
            <h2 className='text-4xl font-semibold text-left align-text-bottom'>Blog and News</h2>
            <div className=' pb-4'>
                <a href="" className='text-right'>
                    <button className='ml-6 text-2xl text-blue-700 p-3 border-2 border-blue-700 rounded-sm hover:bg-blue-700 hover:text-white ease-in-out duration-500 '>Go to Blog</button>
                </a>
            </div>
        </div>

        {/* Section 2 (AWANA DIGITAL) */}
        <div className='md:flex border-b-[1px] border-b-gray-400 pb-6'>
            <div className='pt-8'>
              <img src={Awana} alt="Awana Digital Image" className='object-contain h-56 rounded-md'/>
            </div>

            <div className='md:text-center md:w-[70%] md:pt-28 pt-8 md:pl-14 pl-4'>
              <h3 className='md:text-[30px] text-[20px] text-blue-600 text-left pb-4'><a href="">Digital Democracy is now Awana Digital</a></h3>
              <div className='flex justify-between font-semibold md:text-[16px]'>
                <p>By admin</p>
                <p className='text-blue-600 hover:underline ease-in-out duration-200'><a href="">General updates</a></p>
                <p>July  23, 2024</p>
              </div>
            </div>
        </div>

        {/* Section 3 (Kakawa) */}
        <div className='md:flex border-b-[1px] border-b-gray-400 pb-6'>
            <div className='pt-8'>
              <img src={Kakawa} alt="Kakawa Image" className='object-contain h-52 rounded-md'/>
            </div>

            <div className='md:text-center md:w-[70%] md:pt-28 pt-4 md:pl-14 pl-4'>
              <h3 className='md:text-[30px] text-[20px] text-blue-600 text-left pb-4'><a href="">Kakawa: The offline Earth Defenders Toolkit device </a></h3>
              <div className='flex justify-between font-semibold md:text-[16px]'>
                <p>By Luandro</p>
                <p className='text-blue-600 hover:underline ease-in-out duration-200'><a href="">Earth Defenders Toolkit</a></p>
                <p>April  24, 2024</p>
              </div>
            </div>
        </div>

        {/* Section 4 (Proximamente) */}
        <div className='md:flex border-b-[1px] border-b-gray-400 pb-6'>
            <div className='pt-8'>
              <img src={Proximete} alt="Proximamente Image" className='object-contain h-56 rounded-md'/>
            </div>

            <div className='md:text-center md:w-[70%] md:pt-28 pt-8 md:pl-14 pl-4'>
              <h3 className='md:text-[30px] text-[20px] text-blue-600 text-left pb-4'><a href="">Próximamente: Un nuevo nombre para Digital Democracy</a></h3>
              <div className='flex justify-between font-semibold md:text-[16px]'>
                <p>By Emily Jacobi</p>
                <p className='text-blue-600 hover:underline ease-in-out duration-200'><a href="">General updates</a></p>
                <p>March  27, 2024</p>
              </div>
            </div>
        </div>

        {/* Section 5 (Coming Soon) */}
        <div className='md:flex border-b-[1px] border-b-gray-400 pb-6'>
            <div className='pt-8'>
              <img src={Comingsoon} alt="Coming Soon Image" className='object-contain h-56 rounded-md'/>
            </div>

            <div className='md:text-center md:w-[70%] md:pt-28 pt-8 md:pl-14'>
              <h3 className='md:text-[30px] text-[20px] text-blue-600 text-left pb-4'><a href="">Coming soon: A new name for Digital Democracy</a></h3>
              <div className='flex justify-between font-semibold md:text-[16px] text-[14px]'>
                <p>By Emily Jacobi</p>
                <p className='text-blue-600 hover:underline ease-in-out duration-200'><a href="">General updates</a></p>
                <p>March  27, 2024</p>
              </div>
            </div>
        </div>

        {/* Section 6 (Daughters Of The Earth) */}
        <div className='md:flex border-b-[1px] border-b-gray-400 pb-6'>
            <div className='pt-8'>
              <img src={Daughters} alt="Daughters of The Earth Image" className='object-contain h-60 w-[375px] rounded-md'/>
            </div>

            <div className='md:text-center md:w-[70%] md:pt-28 pt-8 md:pl-14'>
              <h3 className='md:text-[30px] text-[20px] text-blue-600 text-left pb-4'><a href="">Coming soon: A new name for Digital Democracy</a></h3>
              <div className='flex justify-between font-semibold md:text-[16px] text-[14px]'>
                <p>By Aliya Ryan</p>
                <p className='text-blue-600 hover:underline ease-in-out duration-200'><a href="">General updates, Mapeo, Partner updates</a></p>
                <p>March  13, 2024</p>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Blogs
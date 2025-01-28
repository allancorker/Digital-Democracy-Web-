import React from 'react'
import Ptnr1 from '../assets/dd-partners-1.png'
import Ptnr2 from '../assets/dd-partners-2.png'
import Ptnr3 from '../assets/dd-partners-3.png'
import Ptnr4 from '../assets/dd-partners-4.png'
import Ptnr5 from '../assets/dd-partners-5.png'
import Ptnr6 from '../assets/dd-partners-6.png'
import Ptnr7 from '../assets/dd-partners-7.png'
import Ptnr8 from '../assets/dd-partners-8.png'

const Partner = () => {
  return (
    <div className='text-gray-700 md:pt-24 md:pb-16'>
        
        <div className='mx-auto md:w-[80%] text-center px-4'>
            <h2 className='text-3xl font-semibold'>Our Partners</h2>
            <p className='text-xl'>We are part of a global ecosystem of people and groups working for a more just and sustainable world.</p>

            <div className='pt-14'>
                <a href="" className='text-[18px] text-blue-600 hover:underline'>Learn More About Our Partners</a>
            </div>

        </div>

        {/* Links For Partners */}
        <div className='md:flex md:w-[80%] md:mx-auto md:items-center md:justify-between md:px-28 pt-8 px-[30%]'>
            <div className='pt-4'>
              <a href="">
                <img src={Ptnr1} alt="Prtner 001" className='object-contain h-[70px]' />
              </a>
            </div>

            <div className='pt-4'>
              <a href="">
                <img src={Ptnr2} alt="Prtner 002" className='object-contain h-[90px]' />
              </a>
            </div>

            <div className='pt-4'>
              <a href="">
                <img src={Ptnr3} alt="Prtner 003" className='object-contain h-[45px]' />
              </a>
            </div>

            <div className='pt-4'>
              <a href="">
                <img src={Ptnr4} alt="Prtner 004" className='object-contain h-[30px] w-[130px]' />
              </a>
            </div>
        </div>

        <div className='md:flex md:w-[80%] md:mx-auto md:items-center md:justify-between pt-12 md:px-[28px] px-[30%]'>
          <div className='pt-4'>
            <a href="">
              <img src={Ptnr5} alt="Partner 5" className='object-contain h-14' />
            </a>
          </div>

          <div className='pt-4'>
            <a href="">
              <img src={Ptnr6} alt="Partner 6" className='object-contain h-60' />
            </a>
          </div>

          <div className='pt-4'>
            <a href="">
              <img src={Ptnr7} alt="Partner 7" className='object-contain h-24' />
            </a>
          </div>

          <div className='pt-4'>
            <a href="">
              <img src={Ptnr8} alt="Partner 8" className='object-contain h-16' />
            </a>
          </div>
        </div>

    </div>
  )
}

export default Partner
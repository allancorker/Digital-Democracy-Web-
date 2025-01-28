import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Impact = () => {

    // Function for handling scroll trigger
    const [scroller, setScroller] = useState(false)

  return (
    <div className='text-center text-gray-700 md:w-[80%] mx-auto md:pt-24'>
        <div className='w-[60%] mx-auto'>
            <h1 className='text-3xl font-bold pt-6 pb-2'>Our Impact in Numbers</h1>
            <p className='text-xl pt-2 md:pb-32'>Since our founding in 2008, Digital Democracy has promoted approaches to using technology that support local autonomy and ownership over tools and data.</p>
        </div>

        {/* Counters Section */}
        <ScrollTrigger onEnter={ () => setScroller(true)} onExit={() => setScroller(false)}>
            <div className='md:grid md:grid-cols-3 pb-52'>
                <div>
                    <h1 className='text-7xl font-extrabold py-4'>
                        { 
                            scroller &&
                            <CountUp
                            start={0}
                            end={75}
                            duration={4}
                        ></CountUp>
                        }
                    </h1>
                    <h2 className='text-3xl font-semibold py-2'>Projects</h2>
                    <p className='text-xl py-2'>across 38 countries</p>
                </div>

                <div>
                    <h1 className='text-7xl font-extrabold py-4'>
                    { 
                            scroller &&
                            <CountUp
                            start={0}
                            end={800}
                            duration={3}
                        ></CountUp>
                        }
                    </h1>
                    <h2 className='text-3xl font-semibold py-2'>Land Defenders</h2>
                    <p className='text-xl py-2'>actively using our tools</p>
                </div>

                <div>
                    <h1 className='text-7xl font-extrabold py-4'>
                    { 
                            scroller &&
                            <CountUp
                            start={0}
                            end={7}
                            duration={6}
                        ></CountUp>
                        }
                    </h1>
                    <h2 className='text-3xl font-semibold py-2'>Millions hectares</h2>
                    <p className='text-xl py-2'>of territory mapped and defended</p>
                </div>
            </div>
        </ScrollTrigger>
        
    </div>
  )
}

export default Impact
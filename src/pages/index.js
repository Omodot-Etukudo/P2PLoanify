import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Hero from '../../components/home/Hero'
import Button from '../../components/base/Button'
import { motion, useScroll } from "framer-motion"
import Project from '../../components/base/Project'
import Footer from '../../components/home/Footer'
export default function Home() {
  return (
    
    <div>
        <Navbar/>
        <Hero/>

        {/* MINI ABOUT ME SECTION */}

        <div className=" sm:px-6 lg:h-full md:h-full h-full lg:px-20 md:px-14 px-6 lg:py-24 md:py-12 py-20 lg:grid lg:grid-flow-col lg:grid-cols-2 md:grid md:grid-flow-col md:grid-cols-2 gap-10 flex flex-col space-y-2">
            
            <motion.div initial={{y:100, rotate:-10}} whileInView={{y:0, rotate:0}} transition={{type: "spring", stiffness: 50, damping: 10}}>
              <div className='flex flex-col space-y-4 justify-start items-start'>
                  <p className='text-gray-200'>about me</p>
                  <h2 className='font-heading lg:text-7xl md:text-6xl text-5xl font-bold leading-none text-gray-100 lg:w-11/12'>i care about <span className='text-green-300'>realism</span> &<span className='text-orange-400'> functionality.</span></h2>
              </div>
            </motion.div>

            <motion.div initial={{y:100, rotate:10}} whileInView={{y:0, rotate:0}} transition={{type: "spring", stiffness: 50, damping: 10}}>
              <div className='flex flex-col space-y-8'>
                <p className='text-xl font-light text-gray-300 leading-normal'>As a <span className='text-yellow-400'>product designer</span>, I&apos;m committed to creating <span className='text-pink-300'>stunning</span> and <span className='text-orange-400'>functional</span> designs that work. My passion for UX, usability, and <span className='uppercase'>A11Y</span> accessibility is evident in every project I work on. I believe that designing interfaces that are not only aesthetically pleasing but also <span className='text-orange-400'>functional</span> and <span className='text-green-300'>user-friendly</span> is crucial to delivering exceptional results.</p>

                <p className='text-xl font-light text-gray-300 leading-normal'>My <span className='text-blue-200'>frontend development</span> skills allow me to design interfaces that not only look great but also work efficiently, meeting business goals while creating a <span className='text-green-300'>positive experience</span> for end-users and developers alike. I pay attention to the smallest details and i&apos;m committed to delivering exceptional results every time.</p>

                <Button text="more about me" linkTo="" />
              </div>
            </motion.div>

        </div>

        <div className=" lg:h-full md:h-full h-full lg:px-20 md:px-14 px-6 lg:py-24 md:py-12 py-20 flex flex-col lg:space-y-8 space-y-6 justify-center items-center">
          <div className='flex flex-col space-y-8 lg:space-y-0 md:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-3 md:gap-8 w-full'>
              
              <div className='w-full lg:col-span-1'>
                <h3 className='font-heading lg:text-7xl md:text-6xl text-5xl font-bold leading-none text-gray-100 lg:w-11/12 flex justify-start items-start text-left'>
                    my selected projects
                </h3>
              </div>

              <Project isBig />
              
          </div>


          <div className='flex flex-col space-y-8 lg:space-y-0 md:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 md:grid md:grid-cols-3 md:gap-8 w-full'>
            <Project/>
            <Project/>
          </div>

          <div className='flex flex-col space-y-8 lg:space-y-0 md:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 md:grid md:grid-cols-3 md:gap-8 w-full'>
            <Project/>
            <Project/>
          </div>


        </div>


        <div className=" lg:h-full md:h-full h-full lg:px-20 md:px-14 px-6 lg:py-24 md:py-12 py-20 flex flex-col lg:space-y-12 space-y-8 justify-center items-center bg-gray-900">
            <div className='font-heading lg:text-7xl md:text-6xl text-5xl font-bold leading-none text-gray-100 lg:w-full rounded-xl flex justify-center items-center lg:text-center md:text-center text-left w-full'>
                <h3>other cool stuff</h3>
            </div>

            <div className='lg:grid lg:grid-cols-10 lg:gap-8 gap-8 md:grid md:grid-cols-10 md:gap-8 lg:space-y-0 md:space-y-0 flex flex-col-reverse w-full'>
                <div className='h-128 w-full lg:col-span-3 flex flex-col lg:space-y-8 md:space-y-6 space-y-6' >
                    <Project/>
                    <Project/>
                </div>
                <div className='h-128 lg:col-span-7'>
                    <Project/>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
      
      
    
  )
}

import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Offer from '../../components/base/Offer'
import Footer from '../../components/home/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll } from "framer-motion"

export default function Created() {
  return (
    
    <div className='w-full'>  

      <Navbar/>

      <div className='flex flex-col space-y-12 py-60 justify-center items-center'>
            
          <div className='flex flex-col space-y-4 justify-center items-center w-full'>
            <h3 className='text-4xl font-bold text-white'>Oops! Page not found</h3>
            <p className='text-gray-200 text-base w-6/12 flex justify-center items-center text-center'>This does not exist, go back to civilisation.</p>
          </div>
          <Link href="/" className='px-6 py-3 rounded-full text-sm text-main bg-primary hover:bg-green-400 transition-all duration-200'>Go back to home</Link>
      </div>
      <Footer/>

    </div>
      
      
    
  )
}

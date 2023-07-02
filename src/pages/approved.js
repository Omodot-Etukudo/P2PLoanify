import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Offer from '../../components/base/Offer'
import Footer from '../../components/home/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll } from "framer-motion"

export default function Approved() {
  return (
    
    <div className='w-full'>  

      <Navbar isConnected />

      <div className='flex flex-col space-y-12 py-60 justify-center items-center'>
            
          <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{type: "spring", stiffness: 100, damping: 7}}>
            <Image src="/./assets/success.png" width={140} height={140} />
          </motion.div>

          <div className='flex flex-col space-y-4 justify-center items-center w-full'>
            <h3 className='text-4xl font-bold text-white'>Loan Approved</h3>
            <p className='text-gray-200 text-base w-6/12 flex justify-center items-center text-center'>Your funds are now available in your wallet.</p>
          </div>
          <Link href="/myLoans" className='px-6 py-3 rounded-full text-sm text-main bg-primary hover:bg-green-400 transition-all duration-200'>View Loans</Link>
      </div>

      <Footer/>

    </div>
      
      
    
  )
}

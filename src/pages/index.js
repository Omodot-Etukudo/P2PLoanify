import Image from 'next/image'
import { Lexend } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Hero from '../../components/home/Hero'

export default function Home() {
  return (
    
    <div>
        <Navbar/>
        <Hero/>
    </div>
      
      
    
  )
}

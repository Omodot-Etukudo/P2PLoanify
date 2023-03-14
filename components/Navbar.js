import Head from 'next/head'
import NavLink from './NavLink'
import { HomeIcon, BriefcaseIcon, UserCircleIcon, DownloadIcon } from "@heroicons/react/solid"

export default function Navbar() {

    
    return (
      
     <div>  
        <Head>
            <title>Omodot Etukudo | Product Designer & Developer</title>
            <meta name="description" content="Portfolio website for Omodot Etukudo" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;600;700&family=Lexend:wght@100;200;300;400&display=swap"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <nav className=' hidden  z-50 md:flex lg:flex xl:flex justify-between items-center lg:py-6 md:py-6 py-6 lg:px-20 md:px-14 px-6 w-full text-gray-100'>
            <div className='w-24'><a className='lg:font-semibold md:font-semibold font-normal text-yellow-400'>omodot<span className='text-blue-300 font-gray-900 text-lg'>.</span></a></div>
            <ul className='lg:flex md:flex hidden flex-row space-x-12 justify-center items-center '>


                <NavLink isActive name="home" />
                <NavLink name="work" />
                <NavLink name="about" />
                <NavLink name="resume" />
                
            
            </ul>

            <a className='lg:font-semibold md:font-semibold font-normal text-yellow-400'>hello@omodot.io</a>
        </nav>

        <nav className='flex justify-center items-center fixed py-4 px-6 z-50 bottom-1 left-0 w-full md:hidden lg:hidden xl:hidden '>
            <div className='flex justify-between items-center px-4 py-4 w-full rounded-full bg-gray-900 shadow-md border border-gray-800 border-dashed'>
                <NavLink isActive Icon={<HomeIcon/>}/><NavLink Icon={<BriefcaseIcon/>} /><NavLink Icon={<DownloadIcon/>} /><NavLink Icon={<UserCircleIcon/>} />
            </div>

        </nav>

      </div> 
      
    )
}  
    
    
    
    
    
    
    
    
    
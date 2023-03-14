import Head from 'next/Head'
import NavLink from './NavLink'

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
        
        <nav className='z-50 flex justify-between items-center lg:py-6 md:py-6 py-6 lg:px-20 md:px-14 px-6 w-full text-gray-100 bg-gray-900'>
            <div className='w-24'><a className='font-semibold text-yellow-400'>omodot<span className='text-blue-300 font-gray-900 text-lg'>.</span></a></div>
            <ul className='lg:flex md:flex hidden flex-row space-x-12 justify-center items-center '>


                <NavLink isActive name="home" />
                <NavLink name="work" />
                <NavLink name="about" />
                <NavLink name="resume" />
                
            
            </ul>

            <a className='font-semibold text-yellow-400'>hello@omodot.io</a>
        </nav>

      </div> 
      
    )
}  
    
    
    
    
    
    
    
    
    
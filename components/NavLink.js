import Link from "next/link"

export default function NavLink({isActive, name, to}) {

    
    return (
      
     <div className='flex flex-col justify-center items-center text-xs font-semibold'>
        
        <Link href={to} className={isActive? "font-bold text-primary  hidden md:flex lg:flex": "font-light text-gray-300 hidden md:flex lg:flex"}>{name}</Link>        

     </div>
      
    )
}  
    
    
    
    
    
    
    
    
    
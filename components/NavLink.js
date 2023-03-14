
export default function NavLink({isActive, name, Icon}) {

    
    return (
      
     <div className='flex flex-col justify-center items-center'>
        <li className={isActive? "font-semibold text-sm hidden md:flex lg:flex": "font-light text-gray-300 hidden md:flex lg:flex"}>{name}</li>

        <div className="flex flex-col justify-center items-center md:hidden lg:hidden xl:hidden px-4 w-full">
            
            <div className={ isActive? "w-7 h-7 text-gray-100":"w-7 h-7 text-gray-500"} >{Icon}</div>
            <p  className={isActive? "text-xs text-gray-100":"text-xs text-gray-600"} >{name}</p>
        </div>
        
        <div className={ isActive?  "w-1 h-1 bg-yellow-400 rounded-full" : "w-1 h-1 bg-yellow-400 rounded-full opacity-0"} ></div>
     </div>
      
    )
}  
    
    
    
    
    
    
    
    
    
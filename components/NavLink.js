
export default function NavLink({isActive, name}) {

    
    return (
      
     <div className='flex flex-col justify-center items-center'>
        <li className={isActive? "font-semibold text-sm": "font-light text-gray-300"}>{name}</li>
        <div className={ isActive?  "w-1 h-1 bg-yellow-400 rounded-full" : "w-1 h-1 bg-yellow-400 rounded-full opacity-0"} ></div>
     </div>
      
    )
}  
    
    
    
    
    
    
    
    
    
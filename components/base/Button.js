
import Link from "next/link"

export default function Button({isPrimary, text , linkTo}) {

    
    return (
    <Link href={linkTo} className="w-full md:w-64 lg:w-64">
        <div className="relative w-full md:w-64 lg:w-64">
            <div className={isPrimary? "flex justify-center items-center text-base w-full md:w-64 lg:w-64 lg:px-20 md:px-12 py-4 bg-yellow-400 ": "flex justify-center items-center text-base w-full md:w-64 lg:w-64 lg:px-20 md:px-12 py-4 bg-none border-gray-100 border text-white" }>
                {text}
            </div>
            <div className={ isPrimary? "border-dashed border border-yellow-400 opacity-70 w-full md:w-64 lg:w-64 h-full absolute -left-2 -bottom-2 hover:translate-y-1 hover:-translate-x-1 transition duration-150 ease-in" : "border-dashed border border-gray-100 opacity-70 w-full md:w-64 lg:w-64 h-full absolute -left-2 -bottom-2 hover:translate-y-1 hover:-translate-x-1 transition duration-150 ease-in"}>

            </div>
        </div>
     </Link>
      
    )
}  
    
    
    
    
    
    
    
    
    
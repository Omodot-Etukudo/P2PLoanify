
import Link from "next/link"
import { motion, useScroll } from "framer-motion"

export default function Project({isBig}) {

    
    return (
      
            <motion.div initial={{scale:0.2, y:-200}} whileInView={{scale:1 , y:0}} transition={{type: "spring", stiffness: 50, damping: 10}} className={isBig ? "w-full h-128 lg:grid lg:col-span-2 rounded-xl bg-gray-900 border-gray-800 border border-dashed" : "w-full h-128 rounded-xl bg-gray-900 border-gray-800 border border-dashed"}>

            </motion.div>
       
      
    )
}  
    
    
    
    
    
    
    
    
    
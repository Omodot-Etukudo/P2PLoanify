
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { UserCircleIcon } from "@heroicons/react/solid"
import Button from "./Button"
import { useAccount, useBalance } from 'wagmi'
import { useRouter } from 'next/router'
import { Web3Button } from '@web3modal/react'
import Web3 from "web3"
import { useEffect, useState } from 'react'

export default function Offer({index, deleteOffer, repayLoan, showLoan, type, amount,rate, duration, repayment, lender}) {
    
    const { isConnected , address } = useAccount();

    useEffect(() => {
        localStorage.setItem('isConnected', JSON.stringify(isConnected));
    }, [isConnected]);
    
    return (
      
            <motion.div className="rounded-lg bg-gray-900 hover:shadow-2xl shadow-current transition-shadow duration-150 w-full" initial={{scale:0.8, y:-20}} whileInView={{scale:1 , y:0}} transition={{type: "spring", stiffness: 80, damping: 10}}>

                    <div className="py-6 px-6 flex flex-col justify-start items-start space-y-2 w-full">

                        <div className="flex justify-center items-center space-x-2"><UserCircleIcon className="w-4 h-4 text-gray-300" /> <p className="text-gray-200 font-light text-xs">{lender.slice(0,4)+"..."+lender.slice(-4)}</p> </div> 
                        <div className="flex space-x-1 justify-center items-center"><p className="text-3xl text-white font-bold">{amount}eth</p><span className="bg-blue-900 rounded-full text-white text-xs px-1 py-1">@{rate}%</span></div>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col space-y-2">
                                <span className="rounded-full py-2 px-2 bg-primary bg-opacity-30 text-white text-xs flex justify-center items-center">Repay {repayment} eth</span>
                                <span className="rounded-full py-2 px-2 bg-pink-700 bg-opacity-30 text-white text-xs flex justify-center items-center">{duration} Year&#x28;s&#x29;</span>
                            </div>
                            <div className={isConnected?"block":"hidden"} ><Button onClick={ type == "Delete"? () => deleteOffer(index): type == "Repay"? () => repayLoan(index): type == "Default"? () => showLoan(index):null } status={type} /></div>
                            <div className={isConnected?"hidden":"block"}><Web3Button/></div>                            
                        </div>
                    </div>


            </motion.div>
       
      
    )
}  
    
    
    
    
    
    
    
    
    
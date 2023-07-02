
import { motion, useScroll } from "framer-motion"
import {UserCircleIcon, CalendarIcon, ChartBarIcon} from "@heroicons/react/solid"
import Image from "next/image"
export default function Confirm({applyForLoan, closeModal,lender, duration, amount,rate, repayment}) {
    return (
      
        <div className="fixed top-0 left-0 bg-main bg-opacity-50 z-50 w-full h-screen flex lg:justify-center lg:items-center md:justify-center md:items-center justify-end items-end text-center">
            <motion.div initial={{scale:0.8, y:-20}} whileInView={{scale:1 , y:0}} transition={{type: "spring", stiffness: 60, damping: 10}} className="lg:w-4/12 md:w-5/12 w-full bg-white px-10 py-14 rounded-xl shadow-xl flex flex-col space-y-8">
                <div className="flex flex-col space-y-8 justify-center items-center">
                    <p className="text-2xl w-9/12 font-bold text-main" >Are you sure you want this loan?</p>
                    {/* <p className="text-gray-500 text-sm">{amount} eth @{rate}% for {duration}(s)</p> */}
                    <div className="w-full flex flex-col space-y-2 py-4 bg-gray-50 rounded-lg text-xs border border-gray-100">
                        <div className="flex justify-between items-center py-2 px-6 font-semibold "><p className="text-gray-500">Lender</p><div className="flex space-x-1"><UserCircleIcon className="w-4 h-4 text-gray-500" /><p title={lender} className="text-black">{lender.slice(0,4)+`...`+ lender.slice(-4) }</p></div></div>
                        <div className="flex justify-between items-center py-2 px-6 font-semibold "><p className="text-gray-500">Amount</p><div className="flex space-x-1"><Image width={10} height={10} src="/./assets/ethereum.png" /><p className="text-black">{amount} eth</p></div></div>
                        <div className="flex justify-between items-center py-2 px-6 font-semibold "><p className="text-gray-500">Rate</p><div className="flex space-x-1"><ChartBarIcon className="w-4 h-4 text-gray-500" /><p className="text-black">{rate}%</p></div></div>
                        <div className="flex justify-between items-center py-2 px-6 font-semibold "><p className="text-gray-500">Duration</p><div className="flex space-x-1"><CalendarIcon className="w-4 h-4 text-gray-500" /><p className="text-black">{duration} Years</p></div></div>
                        <div className="flex justify-between items-center py-2 px-6 font-semibold "><p className="text-gray-500">You will repay</p><div className="flex space-x-1"><Image width={10} height={10} src="/./assets/ethereum.png" /><p className="text-black">{repayment} eth</p></div></div>          
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center space-y-4 font-semibold text-sm">
                <div className='w-full px-4 py-3 rounded-lg bg-gray-100 text-left'>
                    <p className='text-xs text-gray-900 font-light w-full'>We will check your eligiblity before we approve or reject this loan. Your wallet will be funded instantly if you're eligible.</p>
                 </div>
                    <button onClick={applyForLoan}  className="bg-primary rounded-full px-5 py-4 text-main w-full">Yes, get loan</button>
                    <button onClick={closeModal} className="bg-red-50 rounded-full px-5 py-4 text-red-900 w-full">No, cancel</button>          
                </div>

            </motion.div>
        </div>
        
        
      
    )
  }















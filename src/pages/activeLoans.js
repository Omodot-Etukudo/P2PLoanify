import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Offer from '../../components/base/Offer'
import Footer from '../../components/home/Footer'
import { motion} from "framer-motion"
import { Web3Button } from '@web3modal/react'
import Link from 'next/link'
import Image from 'next/image'
import Confirm from '../../components/Confirm'
import { useAccount, useBalance } from 'wagmi'
import Web3 from "web3"
import { useEffect, useState } from 'react'
import contractABI from './api/myContractABI.json';

export default function ActiveLoans() {

  const { isConnected , address } = useAccount();

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const getOffers = async () => {
      try {
        const abi = contractABI;
        const web3 = new Web3('http://localhost:7545');
        const contractAddress = '0x6935aeE81e5E042E8F25fE3A0f10cb27229DE14b';
        const contract = new web3.eth.Contract(abi, contractAddress);
        const offers = await contract.methods.get_myLoans().call();
        
        setOffers(offers);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function initially when the component mounts
    getOffers();

    // Call the function every 5 seconds
    const intervalId = setInterval(() => {
      getOffers();
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className='w-full'>  

      <Navbar/>

      <div className={isConnected?'flex flex-col space-y-12 py-40 min-h-screen':"hidden"}>

      <div className='flex justify-between items-center'><h3 className='text-2xl font-bold text-white'>Active Loans</h3></div>    
                  

                  {
                      offers.length > 0 ? (
                      <div className='w-full flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-flow-rows lg:grid-cols-3 lg:gap-12 justify-center items-center '>
                            {offers.filter(offer => offer.lender === address).map((offer) =>{
                              return(
                                
                                  <div className='w-full lg:space-y-0' key={offer.offerID}>
                                    <Offer amount={offer.offer_amount} duration={offer.lend_duration} rate={offer.lend_rate} lender={offer.lender} repayment={offer.lend_repayment} type="Empty" />
                                  </div>
                                
                              )
                              
                              

                              }
                            )}
                      </div>

                    ) : 

                      <div className='flex flex-col space-y-4 py-4 justify-center items-center w-full'>
                          <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{type: "spring", stiffness: 100, damping: 7}}>
                            <Image src="/./assets/empty-2.png" width={240} height={240} />
                          </motion.div>
                          <div className='flex flex-col space-y-4 justify-center items-center w-full'>
                            <h3 className='text-4xl font-bold text-white'>No loans given out</h3>
                            <p className='text-gray-200 text-base w-10/12 flex justify-center items-center text-center'>You have given out any loans. When you do, they will be here.</p>
                          </div>
                          <Link href="/create" className='px-6 py-3 rounded-full text-sm text-main bg-primary hover:bg-green-400 transition-all duration-200'>Create Offer</Link>
                      </div>
                  }     
    
                </div> 

      <div className={isConnected?'hidden':'flex flex-col space-y-0 py-40 justify-center items-center'}>
        
        <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{type: "spring", stiffness: 100, damping: 7}}>
          <Image src="/./assets/disconnect.png" width={300} height={300} />
        </motion.div>
        <div className='flex flex-col space-y-8 justify-center items-center w-full'>
          <div className='flex flex-col space-y-4 justify-center items-center w-full'>
            <h3 className='text-4xl font-bold text-white'>Wallet Disconnected</h3>
            <p className='text-gray-200 text-base w-6/12 flex justify-center items-center text-center'>To view loans you have given out, connect your wallet.</p>
          </div>
          <Web3Button/>
        </div>
        
      </div>

      <Footer/>

    </div>
      
      
    
  )
}

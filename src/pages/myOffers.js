import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Offer from '../../components/base/Offer'
import Footer from '../../components/home/Footer'
import { motion} from "framer-motion"
import Link from 'next/link'
import { Web3Button } from '@web3modal/react'
import Image from 'next/image'
import Confirm from '../../components/Confirm'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3 from "web3";
import { useAccount, useBalance } from 'wagmi'
import contractABI from './api/myContractABI.json';
import { Indexed } from 'ethers/lib/utils.js'
import { Router, useRouter } from 'next/router'
import Refunded from './refunded'

export default function MyOffers() {
  const router = useRouter();
  const { isConnected , address } = useAccount();

  const [offers, setOffers] = useState([]);
  const abi = contractABI;
useEffect(() => {
  const getOffers = async () => {
    try {
      
      const web3 = new Web3('http://localhost:7545');
      const contractAddress = '0x6935aeE81e5E042E8F25fE3A0f10cb27229DE14b';
      const contract = new web3.eth.Contract(abi, contractAddress);
      const offers = await contract.methods.get_offers().call();
      setOffers(offers);
    } catch (error) {
      console.error(error);
    }
  };
  getOffers();
  const intervalId = setInterval(() => {
    getOffers();
  }, 1000);
  console.log(offers);
  return () => clearInterval(intervalId);
}, []);

async function deleteOffer(index, amount, lender) {
  
  const newOffers = [...offers];
  newOffers.splice(index, 1);
  setOffers(newOffers);
  const Web3 = require('web3');
  const web3 = new Web3('http://localhost:7545');
  const contractAddress = '0x6935aeE81e5E042E8F25fE3A0f10cb27229DE14b';
  const contract = new web3.eth.Contract(abi, contractAddress);
  const accounts = await web3.eth.getAccounts();
  const indexHex = web3.utils.toHex(index);
  
  const result = await contract.methods.delete_offer(index, amount, lender)
    .send({ from: accounts[0], value:0, gas:3000000 });

  result ? router.push("/refunded"): window.alert("We could not process your refund");
}


  return (
    
    <div className='w-full'>  
      <Navbar/>
      <div className={isConnected?'flex flex-col space-y-12 py-40 min-h-screen':"hidden"}>

      <div className='flex flex-col space-y-12 w-full '>

                <div className='flex justify-between items-center'><h3 className='text-2xl font-bold text-white'>My Offers</h3><Link href="/create" className='px-4 py-4 rounded-full text-sm bg-primary'>Create Offer</Link></div>    
                  

                  {
                      offers.length > 0 && offers.filter(offer => offer.lender === address).length > 0 ? (
                      <div className='w-full flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-flow-rows lg:grid-cols-3 lg:gap-12 justify-center items-center '>
                            {offers.filter(offer => offer.lender === address).map((offer) =>{
                              return(
                                
                                  <div className='w-full lg:space-y-0' key={offer.offerID}>
                                    <Offer index={offers.indexOf(offer)} deleteOffer={() => deleteOffer(offers.indexOf(offer), offer.offer_amount, offer.lender)} amount={offer.offer_amount} duration={offer.lend_duration} rate={offer.lend_rate} lender={offer.lender} repayment={offer.lend_repayment} type="Delete" />
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
                            <h3 className='text-4xl font-bold text-white'>No Offers</h3>
                            <p className='text-gray-200 text-base w-10/12 flex justify-center items-center text-center'>You have not made any offers. When you do, they will be here.</p>
                          </div>
                          <Link href="/create" className='px-6 py-3 rounded-full text-sm text-main bg-primary hover:bg-green-400 transition-all duration-200'>Create Offer</Link>
                      </div>
                  }     
    
                </div>     
        </div>

      <div className={isConnected?'hidden':'flex flex-col space-y-0 py-40 justify-center items-center'}>
        
        <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{type: "spring", stiffness: 100, damping: 7}}>
          <Image src="/./assets/disconnect.png" width={300} height={300} />
        </motion.div>
        <div className='flex flex-col space-y-8 justify-center items-center w-full'>
          <div className='flex flex-col space-y-4 justify-center items-center w-full'>
            <h3 className='text-4xl font-bold text-white'>Wallet Disconnected</h3>
            <p className='text-gray-200 text-base w-6/12 flex justify-center items-center text-center'>To view loan offers you have created, connect your wallet.</p>
          </div>
          <Web3Button/>
        </div>
        
      </div>

      <Footer/>
    </div>
      
      
    
  )
}

import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Offer from '../../components/base/Offer'
import Footer from '../../components/home/Footer'
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { motion} from "framer-motion"
import Link from 'next/link'
import { ethers } from 'ethers';
import Web3 from "web3";
import Image from 'next/image'
import { useAccount, useBalance } from 'wagmi'
import contractABI from './api/myContractABI.json';
import { Web3Button } from '@web3modal/react';

export default function MyLoans() {

  const router = useRouter();

  const { isConnected , address } = useAccount();

  const [offers, setOffers] = useState([]);

useEffect(() => {
  const getOffers = async () => {
    try {
      const abi = contractABI;
      const web3 = new Web3('http://localhost:7545');
      const contractAddress = '0x6935aeE81e5E042E8F25fE3A0f10cb27229DE14b';
      const contract = new web3.eth.Contract(abi, contractAddress);
      const accounts = await web3.eth.getAccounts(); 
      const offers = await contract.methods.get_myLoans().call();
      setOffers(offers);
    } catch (error) {
      console.error(error);
    }
  };

  getOffers();
  console.log(offers)
  const intervalId = setInterval(() => {
    getOffers();
  }, 1000);

  return () => clearInterval(intervalId);
}, []);

async function repayLoan(index) {
  const abi = contractABI;
  const Web3 = require('web3');
  const web3 = new Web3('http://localhost:7545');
  const contractAddress = '0x6935aeE81e5E042E8F25fE3A0f10cb27229DE14b';
  const contract = new web3.eth.Contract(abi, contractAddress);
  const amountToSend = offers[index].lend_repayment*1e18;
  const borrower = address;
  try {
    const result = await contract.methods.repay_loan(index).send({from: borrower, value: amountToSend, gas: 5000000});
    console.log(result);
    router.push("/repaid");
  } catch (error) {
    console.error(error);
    window.alert("Error Repaying");
  }
}

  return (
    
    <div className='w-full'>  

      <Navbar/>

      <div className={isConnected?'flex flex-col space-y-12 py-40 w-full min-h-screen':"hidden"}>

          <div className='flex justify-between items-center'><h3 className='text-2xl font-bold text-white'>My Loans</h3>
          </div>

          <div className='flex flex-col space-y-8 justify-center items-center w-full'>   
              
              {
               offers.length && offers.filter(offer => offer.owner == address).length > 0 ? (
                <div className='w-full flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-flow-rows lg:grid-cols-3 lg:gap-12 justify-center items-center '>
                      {
                      

                        offers.filter(offer => offer.owner == address).map((offer) =>{
                          return(
                            
                              <div className='w-full lg:space-y-0' key={offer.offerID}>
                                <Offer index={offers.indexOf(offer)} repayLoan={() => repayLoan(offers.indexOf(offer))} amount={offer.offer_amount} duration={offer.lend_duration} rate={offer.lend_rate} lender={offer.lender} repayment={offer.lend_repayment} type="Repay" />
                              </div>                        
                          )
                          }
                        )           
                      }
                </div>
                ) : 
                <div className='flex flex-col space-y-4 py-4 justify-center items-center w-full'>
                    <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{type: "spring", stiffness: 100, damping: 7}}>
                      <Image src="/./assets/empty-3.png" width={240} height={240} />
                    </motion.div>
                    <div className='flex flex-col space-y-4 justify-center items-center w-full'>
                      <h3 className='text-4xl font-bold text-white'>No loans taken</h3>
                      <p className='text-gray-200 text-base w-10/12 flex justify-center items-center text-center'>You have not taken an loans. Explore and find offers.</p>
                    </div>
                    <Link href="/allOffers" className='px-6 py-3 rounded-full text-sm text-main bg-primary hover:bg-green-400 transition-all duration-200'>View all offers</Link>
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
            <p className='text-gray-200 text-base w-6/12 flex justify-center items-center text-center'>To view loans you have taken, connect your wallet.</p>
          </div>
          <Web3Button/>
        </div>
        
      </div>

      <Footer/>

    </div>
      
      
    
  )
}

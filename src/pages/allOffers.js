import styles from '@/styles/Home.module.css'
import { motion, useScroll } from "framer-motion"
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Offer from '../../components/base/Offer'
import Footer from '../../components/home/Footer'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Router, useRouter } from 'next/router';
import { ethers } from 'ethers';
import Web3 from "web3";
import { useAccount, useBalance } from 'wagmi'
import contractABI from './api/myContractABI.json';
import Confirm from '../../components/Confirm'

export default function AllOffers() {
const router = useRouter();
const { isConnected , address } = useAccount();
const [offers, setOffers] = useState([]);
const [showModal, toggleModal] = useState(false);
const [selectedOffer, setSelectedOffer] = useState();

useEffect(() => {
  const getOffers = async () => {
    try {
      const abi = contractABI;
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
  return () => clearInterval(intervalId);
}, []);

function openModal(offer, index){
  offer = offers[index]
  toggleModal(!showModal);
  setSelectedOffer(offer)
  console.log(offer)
  return selectedOffer;
}


async function applyForLoan(index,  borrower){
    
  const abi = contractABI;
  const Web3 = require('web3');
  const web3 = new Web3('http://localhost:7545');
  const contractAddress = '0x6935aeE81e5E042E8F25fE3A0f10cb27229DE14b';
  const contract = new web3.eth.Contract(abi, contractAddress);
  const accounts = await web3.eth.getAccounts();
  borrower = address;

  const result = await contract.methods.apply_for_loan(index, borrower)
  .send({ from: borrower, value:0, gas:3000000 });

  result ? router.push("/approved"): window.alert("We could not process your loan application.")
}



  return (
    
    <div className='w-full'>  

      <Navbar />

      <div className='flex flex-col space-y-12 py-40 min-h-screen w-full'>

          <div className='flex justify-between items-center'><h3 className='text-2xl font-bold text-white'>All Offers</h3></div>

         
              
             
              
              {
               offers.length && offers.filter(offer => offer.lender !== address).length > 0 ? (
                <div className='w-full flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-flow-rows lg:grid-cols-3 lg:gap-12 justify-center items-center '>
                      {offers.filter(offer => offer.lender !== address).map((offer) =>{
                        return(
                          
                          <div className='w-full lg:space-y-0' key={offer.offerID}>
                          <Offer showLoan={()=>openModal(offer , offers.indexOf(offer))} index={offers.indexOf(offer)} amount={offer.offer_amount} duration={offer.lend_duration} rate={offer.lend_rate} lender={offer.lender} repayment={offer.lend_repayment} type="Default" />
                          {
                            showModal ? <Confirm closeModal={()=>toggleModal(!showModal)} applyForLoan = {()=>applyForLoan(offers.indexOf(offer), selectedOffer.offer_amount, address)}  amount={selectedOffer.offer_amount} duration={selectedOffer.lend_duration} rate={selectedOffer.lend_rate} lender={selectedOffer.lender} repayment={selectedOffer.lend_repayment} /> : null
                          }
                        </div>
                            
                        )
                        
                        

                        }
                      )}
                </div>

                ) : 

                <div className='flex flex-col space-y-4 py-4 justify-center items-center w-full'>
                    <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{type: "spring", stiffness: 100, damping: 7}}>
                      <Image src="/./assets/empty.png" width={240} height={240} />
                    </motion.div>
                    <div className='flex flex-col space-y-4 justify-center items-center w-full'>
                      <h3 className='text-4xl font-bold text-white'>No Offers</h3>
                      <p className='text-gray-200 text-base w-10/12 flex justify-center items-center text-center'>There are no offers listed. Check again later.</p>
                    </div>
                    <Link href="/create" className='px-6 py-3 rounded-full text-sm text-main bg-primary hover:bg-green-400 transition-all duration-200'>Create Offer</Link>
                </div>

              }

            
              


          
          
          

      </div>
      <Footer/>

    </div>
      
      
    
  )
}

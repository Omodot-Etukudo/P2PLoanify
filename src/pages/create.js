import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Offer from '../../components/base/Offer'
import Footer from '../../components/home/Footer'
import { motion, useScroll } from "framer-motion"
import { useAccount, useBalance } from 'wagmi'
import { useRouter } from 'next/router'
import { Web3Button } from '@web3modal/react'
import Image from 'next/image'
import Web3 from "web3"
import { useEffect, useState } from 'react'
import contractABI from './api/myContractABI.json';

export default function Create() {

  const [account, setAccount] = useState();  
  const [network, setNetwork] = useState();
  const [balance, setBalance] = useState();
  const { isConnected , address } = useAccount();
  const walletAddress = address;
  
  useEffect(() => {
      async function loadAccount() {    
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          setAccount(accounts[0]);     
      }
  
      async function loadBalance() {
          const web3 = new Web3(window.ethereum);
          const network = await web3.eth.net.getNetworkType();
          const balance = await web3.eth.getBalance(walletAddress);
          setNetwork(network);
          setBalance(balance);
      }
  
      if (isConnected) {
          loadAccount();
          loadBalance();
          const interval = setInterval(loadBalance, 1000);
          return () => clearInterval(interval);
      }
  }, [isConnected, walletAddress]);

  const router = useRouter();
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3);
        } catch (error) {
          console.error(error);
        }
      } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
      } else {
        console.error('No web3 provider found');
      }
    }
    loadWeb3();
  }, []);

  useEffect(() => {
    async function loadContract() {
      if (web3) {
        const contractAddress = '0x6935aeE81e5E042E8F25fE3A0f10cb27229DE14b';
        const abi = contractABI;
        const contract = new web3.eth.Contract(abi, contractAddress);
        setContract(contract);
      }
    }
    loadContract();
  }, [web3]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract) return;

    const amount = e.target.amount.value;
    const rate = e.target.rate.value;
    const duration = e.target.duration.value;

    try {
      const accounts = await web3.eth.getAccounts();
      const tx = await contract.methods.create_offer(amount, duration, rate).send({
        from: accounts[0],
        value: amount * 1e18,
        gas: 3000000
      });
      console.log(tx);
      router.push('/created'); // Redirect to the new page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div className='w-full'>  

      <Navbar/>

    <motion.div className='w-full' initial={{y:-50}} whileInView={{y:0}} transition={{type: "spring", stiffness: 30, damping: 10}}>

    
    <div className={isConnected?'flex flex-col space-y-8 pt-40 pb-40 justify-center items-center w-full':'hidden'}>
        
        <div className='flex flex-col space-y-4 justify-center items-center w-full'>
          <h3 className='text-4xl font-bold text-white'>Create Offer</h3>
          <p className='text-gray-200 text-base lg:w-6/12 w-full flex justify-center items-center text-center'>Fill in the offer information below to have it listed.</p>
        </div>

        <form onSubmit={handleSubmit} className=' w-full bg-slate-900 border border-gray-900 shadow-2xl lg:w-5/12 px-8 py-10 rounded-xl flex flex-col space-y-8 justify-start items-start text-left'>

          <div className='flex flex-col space-y-8 justify-start items-start text-left w-full'>  
            <div className='text-white w-full flex flex-col space-y-2'>
              <div className='flex flex-col space-y-3'>
                <label className='text-sm' for="amount">How much are you offering?</label>
                <input required name='amount' id='amount' className='w-full text-sm font-semibold rounded-full py-4 px-4 bg-main' placeholder='Enter Amount' />
              </div>
              <p className='text-xs text-gray-500'>Wallet Balance <span>{(balance/1e18).toFixed(2)}eth</span></p>
            </div>

            <div className='text-white w-full flex flex-col'>
              <div className='flex flex-col space-y-3'>
                <label className='text-sm' for="rate">At what rate?</label>
                <input required name='rate' id='rate' className='w-full text-sm font-semibold rounded-full py-4 px-4 bg-main' placeholder='Enter Rate. eg 5%, 10%, 20%' />
              </div>
            </div>

            <div className='text-white w-full flex flex-col space-y-2'>
              <div className='flex flex-col space-y-3'>
                <label className='text-sm' for="duration">For how long?</label>
                <select required name='duration' id='duration' className='w-full text-sm font-semibold rounded-full py-4 px-4 bg-main' placeholder='Select Duration'>
                  <option value="null">--Select Duration--</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option> 
                  <option value="4">4 Years</option>   
                  <option value="5">5 Years</option>
                  <option value="6">6 Years</option>      
                  <option value="7">7 Years</option>
                  <option value="8">8 Years</option>
                  <option value="9">9 Years</option>
                  <option value="10">10 Years</option>
                  <option value="11">11 Years</option>
                  <option value="12">12 Years</option>
                </select>
              </div>
              <p className='text-xs text-gray-500'>Maximum of 12 Years</p>
            </div>
          </div>

          <div className='w-full px-4 py-3 rounded-lg bg-gray-800'>
            <p className='text-xs text-gray-200 font-light w-full'>The funds will be deducted from your wallet and held on the platform. If you change your mind, you can delete the offer to get a refund.</p>
          </div>

          <button type='submit' className='w-full px-6 py-3 rounded-full text-sm text-main bg-primary hover:bg-green-400 transition-all duration-200'>Create Offer</button>

        </form>

    </div>

    <div className={isConnected?'hidden':'flex flex-col space-y-0 py-40 justify-center items-center'}>
        
        <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{type: "spring", stiffness: 100, damping: 7}}>
          <Image src="/./assets/disconnect.png" width={300} height={300} />
        </motion.div>
        <div className='flex flex-col space-y-8 justify-center items-center w-full'>
          <div className='flex flex-col space-y-4 justify-center items-center w-full'>
            <h3 className='text-4xl font-bold text-white'>Wallet Disconnected</h3>
            <p className='text-gray-200 text-base w-6/12 flex justify-center items-center text-center'>To create an offer, connect your wallet.</p>
          </div>
          <Web3Button/>
        </div>
        
    </div>
    
    </motion.div>
      

      <Footer/>

    </div>
      
      
    
  )
}

import Head from 'next/head'
import {  CubeIcon } from "@heroicons/react/solid"
import Link from 'next/link'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import { Web3Button } from '@web3modal/react'
import Web3 from "web3"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {

//Initialize React Router
const router = useRouter()

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

 
    return (
      
     <div>  
        <Head>
            <title>P2P Loanify</title>
            <meta name="description" content="P2P Platform for lending and borrowing crypto." />
            <meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;600;700&family=Lexend:wght@100;200;300;400&display=swap"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <nav className='fixed left-0 z-40  lg:py-2 md:py-2 py-4 lg:px-8 px-4 w-full text-gray-100 flex justify-center items-center'>
            <div className='w-full  flex md:flex lg:flex xl:flex justify-between items-center lg:bg-main lg:px-12 lg:py-5 lg:bg-opacity-95 lg:border lg:border-gray-800 lg:rounded-full lg:shadow-2xl'>
                <div className='flex space-x-4 justify-center items-center'>
                
                    <div className='flex justify-center items-center space-x-1 text-white'><CubeIcon className='w-10 h-10 ' /><Link href="/" className='font-bold  text-2xl'>Loanify</Link></div>
                
                    <ul className={isConnected?'lg:flex md:flex hidden flex-row space-x-10 justify-center items-center pl-20':"hidden"}>

                        
                        <Link href="/allOffers" className={router.pathname=='/allOffers' ? "font-semibold text-primary text-xs hidden md:flex lg:flex":"font-semibold text-gray-300 text-xs hidden md:flex lg:flex"}>All Offers</Link> 

                        <Link href="/myOffers"  className={router.pathname=='/myOffers' ? "font-semibold text-primary text-xs hidden md:flex lg:flex":"font-semibold text-gray-300 text-xs hidden md:flex lg:flex"}><p className={router.pathname=='/myOffers'? "text-primary":"text-gray-300"}>My Offers</p></Link> 

                        <Link href="/myLoans" className={router.pathname=='/myLoans' ? "font-semibold text-primary text-xs hidden md:flex lg:flex":"font-semibold text-gray-300 text-xs hidden md:flex lg:flex"}><p className={router.pathname=='/myLoans'? "text-primary":"text-gray-300"}>My Loans</p></Link> 

                        <Link href="/activeLoans" className={router.pathname=='/activeLoans' ? "font-semibold text-primary text-xs hidden md:flex lg:flex":"font-semibold text-gray-300 text-xs hidden md:flex lg:flex"}><p className={router.pathname=='/activeLoans'? "text-primary":"text-gray-300"}>Active Loans</p></Link> 
                            
                    </ul>
                        
                </div>
                <div className={ 'flex space-x-4 justify-center items-center'}>
                    <div className={ isConnected? 'bg-slate-900 rounded-full px-2 py-1.5 text-white flex justify-center items-center space-x-2 text-xs':"hidden"}><div><Image width={15} height={15} src="/./assets/ethereum.png" /></div><p className=' whitespace-nowrap'>{(balance/1e18).toFixed(2)} eth</p></div>
                    <Web3Button className="bg-primary" />
                </div>
            
            </div>
            
        
        </nav>

        


      </div> 
      
    )
}  
    
    
    
    
    
    
    
    
    
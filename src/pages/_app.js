import '@/styles/globals.css'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig, useAccount, useBalance } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = '9cb9e6806fa78f62e5f88c24c4d83e67'
const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {

   
  return (
  <WagmiConfig client={wagmiClient}>
    <Component {...pageProps} />
    <Web3Modal themeVariables={{
    '--w3m-accent-color': '#B2FFA4',
    '--w3m-accent-fill-color':'#0C0F1C'
  }} projectId={projectId} ethereumClient={ethereumClient} />
  </WagmiConfig>
  
  
  )


}

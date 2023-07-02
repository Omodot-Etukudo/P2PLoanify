import React from 'react'
import Link from 'next/link'
import Button from '../base/Button'

function Footer() {
  return (
    <div className='flex justify-between items-center text-center w-full py-8'>
        <p className='text-2xl font-bold leading-none text-white text-center'>Loanify</p>
        <div className='flex justify-center items-center space-x-8 text-sm'>
            <p className=' font-semibold leading-none text-white text-center'>I want a loan</p>
            <p className=' font-semibold leading-none text-white text-center'>I want to lend</p>
        </div>
        
    </div>
  )
}

export default Footer

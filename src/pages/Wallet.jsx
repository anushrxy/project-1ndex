import React from 'react'
import WalletComponent from '../components/Wallet.component'

function Wallet({address, handle}) {
  return (
    <>
        <WalletComponent address={address} handle={handle} />
    </>
  )
}

export default Wallet
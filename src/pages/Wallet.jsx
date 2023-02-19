import React from 'react'
import WalletComponent from '../components/Wallet.component'

function Wallet({address, handle,balance,balanceInr}) {
  return (
    <>
        <WalletComponent address={address} balanceInr={balanceInr} balance={balance} handle={handle} />
    </>
  )
}

export default Wallet
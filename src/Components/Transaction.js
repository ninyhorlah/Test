import React from 'react'
import DailyTransaction from './DailyTransaction'
import Payments from './Payment'
import Graph from './Graph'
import Footer from './Footer'

const Transaction = () => {
    return (
        <div className='TransactionBody'>
            <DailyTransaction/>

            <Graph/>

            <Payments/>

            <Footer/>
        </div>
    )
}

export default Transaction

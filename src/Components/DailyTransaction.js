import React from 'react';
import Chart from './Chart';

const DailyTransaction = () => {
    return (
        <div className='TransactionDetails'>
            <div className="DailyWrapper">
                <div className='Daily'>
                    <div>
                        <p>Daily Transaction Volume</p>
                        <p>2,342</p>
                    </div>
                    <div>
                        <img src="/assets/smallChart.svg" alt=""/>
                    </div>
                </div>
                <div className='Daily'>
                    <div>
                        <p>Daily Transaction Value</p>
                        <p>&#x20A6; 4,000,000</p>
                    </div>
                    <div>
                        <Chart/>
                    </div>
                </div>
            </div>
            <div className="TotalWrapper">
                <div className='Total'>
                    <div>
                        <p>Total Transaction Volume</p>
                        <p>452,000</p>
                    </div>
                    <div>
                        <img src="/assets/smallChart.svg" alt=""/>
                    </div>
                </div>
                <div className='Total'>
                    <div>
                        <p>Total Transaction Value</p>
                        <p>&#x20A6; 4,000,000</p>
                    </div>
                    <div>
                        <img src="/assets/smallChart.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyTransaction

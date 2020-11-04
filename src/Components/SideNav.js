import React from 'react'


const SideNav = () => {
    return (
        <div className='sideNav' >
            <div className='Button'>
                <button>GENERATE INVOICE</button>
            </div>

            <div className="Choice">
                <div className="Main">
                    <h4>Main</h4>
                    <p><img src='/assets/overview.svg' alt=""/> Overview</p>
                </div>
                <div className="Payment">
                    <h4>Payments</h4>
                    <div>
                        <p><img src='/assets/AllPayment.svg' alt=""/> All Payments</p>
                    </div>
                    <div>
                        <p><img src='/assets/Reconciled.svg' alt=""/> Reconciled Payments</p>
                    </div>
                    <div>
                        <p><img src='/assets/Unreconciled.svg' alt=""/> Un - Reconciled Payments</p>
                    </div>
                    <div>
                        <p><img src='/assets/manual.svg' alt=""/> Manual Settings</p>
                    </div>
                </div>
                <div className="Orders">
                    <h4>Orders</h4>
                    <div>
                        <p><img src='/assets/AllOrders.svg' alt=""/> All Payments</p>
                    </div>
                    <div>
                        <p><img src='/assets/Pending.svg' alt=""/> Pending Orders</p>
                    </div>
                    <div>
                        <p><img src='/assets/Reconcileorder.svg' alt=""/> Reconciled Orders</p>
                    </div>
                    <div>
                        <p><img src='/assets/Merchant.svg' alt=""/> Merchant Profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav

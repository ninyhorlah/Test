import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
// import ProgressBar from 'react-bootstrap/ProgressBar'
import Progress from './Progress'

const Graph = () => {
    
    return (
        <div className='graphShow'>
            <div>
                <div className='Date'>
                    <div>
                        <p>Today: 5, Aug 2018</p>
                    </div>
                    <div className='DateButton'>
                        <div>
                            <button>1 Jan - 1 Jun <FontAwesomeIcon icon={faAngleDown}/></button>
                        </div>
                        <div className='arrow'>
                            <button>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Month'>
                    <h5>Jan</h5>
                    <h5>Feb</h5>
                    <h5>March</h5>
                    <h5>April</h5>
                    <h5>May</h5>
                    <h5>Jun</h5>
                </div>
                <div className="graph">
                    <img src="/assets/bigGraph.svg" alt=""/>
                </div>
            </div>
            <div className='progressSect'>
                <div className='progressInner'>
                    <h5>Orders</h5>
                    <div className="prog">
                        <Progress done='80' />
                    </div>
                    <p>Pending Orders: <span className="leftover">20</span></p>
                    <p>Reconciled Orders: <span className="done">80</span></p>
                    <p>Total Orders: 100</p>
                </div>
                <div className='progressInner'>
                    <h5>Payments</h5>
                    <div className='prog'>
                        <Progress done='80' />
                    </div>
                    <p>Pending Payments: <span className="leftover">20</span></p>
                    <p>Reconciled Payments: <span className="done">80</span></p>
                    <p>Total Payments: 100</p>
                </div>
            </div>
        </div>
    )
}

export default Graph

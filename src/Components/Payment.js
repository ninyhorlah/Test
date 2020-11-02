import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
// import Select from 'react-select'

const Payment = () => {
    // const options = ['Reconciled','Un-reconciled','Pending']
    // let num, res;
    
    // num = Math.floor(Math.random() * options.length) ;

    // for(let i = 0; i < options.length; i++){
    //          res = options[num];
    // }
    return (
        <div>
            <div className='Payment'>
                <h3>Payments</h3>
                <div className='PaymentOutline'>
                    <p>Showing <span className='shownum'>20 <FontAwesomeIcon icon={faAngleDown}/></span> out of 500 payments</p>
                    <div className='search'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder='Search...'/>
                    </div>

                    <div className='show'>
                        <p>Show</p>
                        <div>
                            <select >
                                <option value="All">All</option>
                                <option value="Reconciled">Reconciled</option>
                                <option value="Un-reconciled">Un-reconciled</option>
                                <option value="Settled">Settled</option>
                                <option value="Unsettled">Unsettled</option>
                            </select>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="itemHead">
                <div className='item type'>
                            <p>Item Type</p>
                        </div>
                        <div className='item price'>
                            <p>Price</p>
                        </div>
                        <div className='item transact'>
                            <p>Transaction No</p>
                        </div>
                        <div className='item time'>
                            <p>Time</p>
                        </div>
                        <div className='item status'>
                            <p>Status</p>
                        </div>
            </div>

            
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                 <div className='item'>
                    <p className='straight '>
                        <div className="reco">
                            <div className='dot'></div>
                            <div className='rec'>Reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="pend">
                            <div className='dot'></div>
                            <div className='pen'>Pending</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                    
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="reco">
                            <div className='dot'></div>
                            <div className='rec'>Reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="reco">
                            <div className='dot'></div>
                            <div className='rec'>Reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="unreco">
                            <div className='dot'></div>
                            <div className='unrec'>Un-reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                    
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="unreco">
                            <div className='dot'></div>
                            <div className='unrec'>Un-reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                    
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="unreco">
                            <div className='dot'></div>
                            <div className='unrec'>Un-reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                    
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="unreco">
                            <div className='dot'></div>
                            <div className='unrec'>Un-reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                    
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="unreco">
                            <div className='dot'></div>
                            <div className='unrec'>Un-reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                    
                </div>
            </div>
            <div className="itemBody">
                <div className='item'>
                    <p>
                        <img src="/assets/itemImage.svg" alt="item"/> <span>Apple Mac Book 15” 250 SSD 12GB</span>
                    </p>
                </div>
                <div className='item'>
                    <p>$73430</p>
                </div>
                <div className='item'>
                    <p>1234567890</p>
                </div>
                <div className='item'>
                    <p>12:30</p>
                </div>
                <div className='item'>
                    <p className='straight '>
                        <div className="unreco">
                            <div className='dot'></div>
                            <div className='unrec'>Un-reconciled</div>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </p>
                    
                </div>
            </div>



            <div>
                
            
            
            </div>
       

       
        </div>
    )
}

export default Payment

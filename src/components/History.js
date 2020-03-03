import React, { Fragment, useContext, useEffect } from 'react'
import { AppContext } from '../context/GlobalContext'
import Spinner from '../img/spinner.svg'

const History = () => {
    useEffect(() => {
        getItems()
        // eslint-disable-next-line
    }, [])
    const { transactions, RemoveItem, getItems, loading } = useContext(AppContext);    
    return (
        <Fragment>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    loading ? 
                    <div className="center-spinner">
                        <div><img height="50" width="50" src={Spinner} alt="Spinner" /></div>
                    </div>
                    :
                    <Fragment>
                        {
                            transactions.map((transaction, i) => {
                                const sign = transaction.amount < 0 ? '-' : '+';
                                return (
                                    <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={i}>
                                        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => RemoveItem(transaction._id)} className="delete-btn">x</button>
                                    </li>
                                )
                            })
                        }
                    </Fragment>
                }
                
            </ul>
        </Fragment>
    )
}

export default History

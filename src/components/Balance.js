import React, { Fragment, useContext } from 'react'
import { AppContext } from '../context/GlobalContext'
import { numberWithCommas } from '../utils/formatNumber';

const Balance = () => {
    const { transactions } = useContext(AppContext)
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1 id="balance">${numberWithCommas(total)}</h1>
        </Fragment>
    )
}

export default Balance

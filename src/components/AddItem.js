import React, { useContext, useState, Fragment } from 'react'
import { AppContext } from '../context/GlobalContext'

const AddItem = () => {
    const [state, setState] = useState({
        text: '',
        amount: ''
    })
    const { AddItem } = useContext(AppContext)
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const transaction = {
            text,
            amount: Number(amount)
        };
        setState({
            ...state,
            text: '',
            amount: ''
        })
        AddItem(transaction)
    }
    const { text, amount } = state;
    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        name="text" 
                        value={text} 
                        maxLength="100"
                        onChange={onChange} 
                        required 
                        placeholder="Enter text..." 
                    />

                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                    <input 
                        type="number" 
                        name="amount" 
                        value={amount} 
                        onChange={onChange} 
                        required 
                        placeholder="Enter amount..." 
                    />

                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    )
}

export default AddItem

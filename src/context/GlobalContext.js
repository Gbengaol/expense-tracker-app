import React, { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer';
import axios from 'axios'
import { transactionsURL } from '../apis/endpoints';

const initialState =  {
    transactions: [],
    loading: true, 
    error: false
}

export const AppContext = createContext(initialState)

const GlobalContext = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    async function getItems(){
        try {
            const res = await axios.get(transactionsURL)
            dispatch({
                type: 'GET_ITEMS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }  

    async function AddItem (item){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(transactionsURL, item, config);
            dispatch({
                type: 'ADD_ITEM',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }
    async function RemoveItem (id){
        try {
            await axios.delete(`${transactionsURL}/${id}`)
            dispatch({
                type: 'REMOVE_ITEM',
                payload: id
            })
        } catch (err) {
            console.log(err)
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            }) 
        }
    }
    return (
        <AppContext.Provider value={{
            AddItem,
            transactions: state.transactions,
            RemoveItem,
            getItems,
            loading: state.loading,
            error: state.error
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default GlobalContext

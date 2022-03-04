
import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../store/index'


function Bank() {
   const dispatch = useDispatch();
  return (
    <div>
    
         <h3>(Deposit-Limit = 500 INR)</h3>
         <button onClick={()=>{dispatch(actionCreators.depositMoney(500))}}>Deposit Money</button> 
        <h3>(WithDraw-Limit = 100 INR)</h3>
        <button onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>WithDraw Money</button>
    </div>
  )
}

export default Bank
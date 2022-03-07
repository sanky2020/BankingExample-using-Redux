
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../store/index'


function Bank() {
  const [depositvalue, setDepositValue] = useState(0);
  const [withdrawvalue, setWithdrawValue] = useState(0);
   const dispatch = useDispatch();
  return (
    <div>
        
         <h3>(Enter Amount to be Deposited)</h3>
         <input name='deposit' value={depositvalue} onChange={(e)=>setDepositValue(e.target.value)}/>
         <button onClick={()=>{dispatch(actionCreators.depositMoney(depositvalue))}}>Deposit Money</button> 
        <h3>(Enter Amount to be Withdrawn)</h3>
        <input name='withdraw' value={withdrawvalue} onChange={(e)=>setWithdrawValue(e.target.value)}/>
        <button onClick={()=>{dispatch(actionCreators.withdrawMoney(withdrawvalue))}}>WithDraw Money</button>
    </div>
  )
}

export default Bank
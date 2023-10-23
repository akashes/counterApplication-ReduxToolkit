import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice'
import { useState } from 'react'


function Display() {
    const [amount, setamount] = useState('')
    const dispath=useDispatch()
    const count=useSelector((state)=>state.counter.count)
    const handleIncrement=()=>{
        if(amount){

            dispath(incrementByAmount(Number(amount)))
            
        }else{
            alert('please provide amount')
        }
    }
  return (
        <div style={{height:'70vh'}} className='d-flex justify-content-center align-items-center' >
            <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column gap-5'>
                <h1 style={{fontSize:'100px'}}>{count}</h1>
                <div className='d-flex gap-3' >
                    <button onClick={()=>dispath(decrement())} className='btn btn-warning'>Decrement</button>
                    <button onClick={()=>dispath(reset())} className='btn btn-danger'>Reset</button>
                    <button onClick={()=>dispath(increment())} className='btn btn-success'>Increment</button>
                </div>
                <div className='d-flex gap-1'>
                    <input onChange={(e)=>setamount(e.target.value)} type="text" className='form-control border-0 ' placeholder='enter value to be added' />
                    <button onClick={handleIncrement}  className="btn btn-info">ADD</button>
                </div>

            </div>
        </div>

  )
}

export default Display
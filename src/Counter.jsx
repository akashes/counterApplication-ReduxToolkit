import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { decrement, increment, reset } from './redux/counterSlice'
import { useDispatch } from 'react-redux'


function Counter() {
  const count=useSelector((state)=>state.Counter.count)
const dispatch=useDispatch()

  return (
   <div className='w-100 d-flex justify-content-center'>
     <div  className='d-flex flex-column justify-content-center align-items-center border w-25 rounded p-3 gap-2'>
      <div className='p-3 border rounded'>{count}</div>
      <div className='d-flex gap-3'>
        <button  onClick={()=>dispatch(increment())} className="btn btn-success">Increment</button>
        <button onClick={()=>dispatch(reset())} className="btn btn-warning">Reset</button>
        <button onClick={()=>dispatch(decrement())} className="btn btn-danger">Decrement</button>
      </div>
        <input type="text"  placeholder='enter value to be incremented' />
      <button className="btn btn-info">ADD</button>
      </div>
      
    </div>
   </div>
  )
}

export default Counter
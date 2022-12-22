import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addInital } from '../redux/actions/counterActions'
const InitialValue = () => {
    const [init, setInit] = useState(0)
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addInital(+init))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="number" placeholder="add initial.." onChange={(e)=>setInit(e.target.value)} />
        </form>
    </div>
  )
}

export default InitialValue
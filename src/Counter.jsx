import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./Redux/CounterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count =useSelector((state)=>state.counterReducer.count)
  const [amount,setAmount]=useState("");
  const handleIncrement=()=> {
    if(!amount){
      alert("Please enter a amount")
    }
    else{
      // update value store
      const value = Number(amount);
      dispatch(incrementByAmount(value))
       setAmount("");
      
    }
    
  }
  return (
    <div className="mt-5 p-5   border border-success-subtle border-opacity-10 rounded-5">
      <h1 className="text-white text-center my-5">Counter Application</h1>
      <hr />
      <h1 className="text-white text-center">{count}</h1>
      <div className="d-flex gap-5 my-5 justify-content-center">
        <button onClick={() => dispatch(increment())} className="btn btn-warning">
          Increment
        </button>
        <button onClick={() => dispatch(reset())} className="btn btn-danger">
          Reset
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-success"
        >
          Decrement
        </button>
      </div>
      <hr />
      <div className="d-flex gap-4 mt-5">
        <input
          type="text"
          name=""
          id="value"
          className="form-control"
          placeholder="Enter Amount to be Incremented" onChange={(e=>setAmount(e.target.value))} value={ amount}
        />
        <button className="btn btn-primary" onClick={handleIncrement}>Increment Amount</button>
      </div>
    </div>
  );
}

export default Counter;

import React, {useState} from 'react';
// import './ItemCount.css';


const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const counterUp = () =>{
      if (counter<10){
          setCounter(counter+1);
      }
  };
 const counterDown = ()=>{
     if (counter > 0) {
         setCounter(counter - 1);
     }
 };
  return (
    <div className="contador">
        <h2>Cantidad</h2>
        <p>{counter}</p>
        <button onClick={counterUp}>+</button>
        <button onClick={counterDown}>-</button>
    </div>
  )
};

export default ItemCount;
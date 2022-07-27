import React, { useReducer } from 'react';

// const UseReducer = () => {

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "Increment":
//         return {count: state.count + 1, showText: state.showText}
//       case "toggleShowText":
//         return {count: state.count, showText: !state.showText}
//       default:
//         return state;
//     }  
//   }

//   const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});


//   return (
//     <div>
//       <button>Decrement</button>
//       <h1>{state.count}</h1>
//       <button>Decrement</button>
//       {/* <button onClick={() => {
//         dispatch({ type: "Increment"});
//         dispatch({ type: "toggleShowText"})
//       }}>Click here</button> */}
//       {state.showText && <p>This is a text</p> }
      
//     </div>
//   )
// }

const UseReducer = () => {
  
  const reducer = (state, action) => {
    switch (action.type){
      case "Increment":
        return {count: state.count + 1, showText: state.showText}
      case "Decrement":
        return {count: state.count - 1, showText: state.showText}
      case "toggleShowText":
        return {count: state.count, showText: !state.showText}
      default:
        return state;
    }
  }

  const handleDecrementAndIncrement = (e) => {
    switch(e.target.textContent){
      case "Decrement":
        dispatch({ type: "Decrement" });
        dispatch({ type: "toggleShowText" });
        break;
      case "Increment":
        dispatch({ type: "Increment" });
        dispatch({ type : "toggleShowText" });
        break;
      default:
        return e.target;
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

  return(
    <>  
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={handleDecrementAndIncrement}>Decrement</button>
        <h2>{state.count}</h2>
        <button onClick={handleDecrementAndIncrement}>Increment</button>
      </div>
      
      {state.showText && <p style={{textAlign: 'center'}}>This is a text</p> }
    </>
  )
}



export default UseReducer; 
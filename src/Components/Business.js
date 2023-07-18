import React, { Component } from 'react'
import News from './News';

export default class Business extends Component {
  render() {
    return (
      <div>
        <News pageSize={6} category='business'/>
      </div>
    )
  }
}




// import React, {useReducer} from 'react';
// const initialState = {count:0}
// const reducer = (state, action)=>{
//     console.log(state, action)
//     switch(action.type){
//         case 'DECREMENT':
//             return {count:state.count-1}
//             case 'INCREMENT':
//                 return {count:state.count+1}

//                 default: 
//                 return state
//                 //const [state, dispatch] = useReducer(reducer,initialArg, init)
    
//     }
//     return state
// }
// function Counter() {
//     //const [count,setCount] = useState(0)
//     const [state, dispatch] = useReducer (reducer, initialState)
    
//     return (
//         <div>
//         <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
//         {state.count}
//         <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>

//                 </div>
//     );
// }

// export default Counter;
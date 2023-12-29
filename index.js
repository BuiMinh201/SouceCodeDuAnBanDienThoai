import React, { useEffect } from "react"
import ReactDom from "react-dom"
import App from "./App"
// const App = () =>{
//     const [data,setData] = React.useState(true);
//     const updateData = ()=>setData(!data);
//     useEffect(()=>{

//     },[]);
//     useEffect(()=>{
//         if(!data){
//             setData(!data);
//         }
//     },[data]);

//     return <button onClick={updateData}>Lifecycle Hook</button>
// }

ReactDom.render(<App/>, document.getElementById("root"))
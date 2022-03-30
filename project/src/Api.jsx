
import React from 'react'
import { useState, useEffect } from 'react';


const Api = () => {

   const [input, setInput] = useState([]);
   

       const apiCall = () =>{

        fetch ("https://jsonplaceholder.typicode.com/posts" )
        .then(responce => responce.json())
        .then((json) => {
          setInput(json);

        });
       };
        useEffect (() =>{
          apiCall();

        },[])


return (
    <>
     <div className="rajesh">
    {/* <ul>
    {input.map(item=>
      <li key={ item.id}>{item.userId} {item.body}  </li> 


      )}

   

    </ul> */}
   { input.map(item =>
      <table  key={ item.id}>
      <td>id</td>
      <td>tittle</td>
      <td>body</td>
      <tr> {item.userId} </tr>
      <tr></tr>

    </table>)}

    </div>
    </>
  )
}

export default Api;
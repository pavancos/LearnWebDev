import React, { useEffect } from 'react'
import { useState } from 'react'
import './Test2.css'
const Test2 = () => {
  let [post,setPost]  = useState([]);
  async function getData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let parsedData = await data.json();
    console.log(parsedData);
    setPost(parsedData);
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            post.map((item)=>{
              return(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default Test2
import React,{useState} from "react";
import {Link,useHistory} from 'react-router-dom'
import Popup from '../Components/Popup'
import axios from 'axios'

export default function Login() {
     const  history =useHistory()
      const [isOpen, setIsOpen] = useState(false);
    const[data,setData]=useState({
    Email:"",
    password:""
  })
  const[error,setError]=useState("")
  const submit= async(e)=>{
    e.preventDefault()
 if(data.Email == "admin@namasys.com" && data.password == "admin123")
 {
   try{
     await axios.post("http://localhost:4000/api/user/login",{
      email:data.Email,
      password:data.password}
    ,{withCredentials:true})
    }
     catch(error ){
  if(error.response) { 
    console.log(error.response.data)
  }
}
     history.push("/home")
 }

        else {
           setIsOpen(!isOpen);
        }
   
    setData({
    Email:"",
    password:"" 
    })
     }
  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData)
    setError('')
  }
return (
  <div style={{width:"50vh",margin:"auto"}}>
      <h1 className="my-4 font-weight-bold .display-4">Sign In</h1>
     <div className="conatiner">
     <div className="form-div">
  <form onSubmit={(e)=>submit(e)}>
     <div>
      <label htmlFor="Email">Email :</label>
      <input type="email" id="Email" required onChange={(e)=>handle(e)} value={data.Email||""}  className="form-control form-group"/>
    </div>
     <div>
      <label htmlFor="password">Password :</label>
      <input type="password" id="password"  required onChange={(e)=>handle(e)} value={data.password||""}  className="form-control form-group"/>
    </div>
   <button className="btn btn-dark mt-3" type="submit">Login In</button> 
   {isOpen && <Popup
      content={<>
        <p style={{color:"red",font:"50rem"}}>Invalid Credentials</p>
      </>}
      setIsOpen={setIsOpen}
    />}
  </form>
  </div>
  </div>
 



  </div>
  
  
)

}
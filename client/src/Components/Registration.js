import React,{useState,useEffect} from "react";
import Popup from './Popup'
import validator from 'validator'
import axios from 'axios'
const Register= ({setIsRegistered}) => {
  const [isOpen, setIsOpen] = useState(false)
  const[nameError,setNameError]=useState('')
  const[phoneError,setPhoneError]=useState('')
  const[emailError,setEmailError]=useState('')
  const[addressError,setAddressError]=useState('')
   
  const[data,setData]=useState({
  userName:"",
    phone:"",
    email:"",
    address:""
   
  })
 
  const validate=()=>{
    let valid =true;
    if(!data.userName.match("^[a-zA-Z0-9 ]*$"))
   {
  
    setNameError("Only Alphanumeric Characters are Allowed")

    valid=false;
     
   }
   
  
   if(data.userName===''||data.userName===null)
   {
    setNameError("Required")
     valid=false;
   
  }
   if(data.phone.length!=10)
   {
   setPhoneError("Mobile No should be of 10 digits")
   valid=false;
}
   if(data.phone===''||data.phone===null)
   {
    setPhoneError("Required")
     valid=false;
}
     if (!validator.isEmail(data.email)) 
     {
      setEmailError('Invalid Email ')
       valid=false;
}
     if(data.email===''||data.email===null)
     {
    setEmailError("Required")
     valid=false;
}
     if(data.address===''||data.address===null)
{
   setAddressError("Required")
     valid=false;
}
return valid;

  }
  const submit= async(e)=>{
   
    e.preventDefault()
    if(validate())
    {
     setIsOpen(!isOpen);
      try{
   await axios.post("http://localhost:4000/api/user/register",{
      userName:data.userName,
      phone:data.phone,
      email:data.email,
     address:data.address
    ,withCredentials:true})
     
   setData({ userName:"",
    phone:"",
    email:"",
    address:""})
    setIsRegistered(true)

  }
 
  catch(error){
   alert(error)
  }
    }
  
  }
  const handle=(e)=>{
    setIsRegistered(false)
 if(e.target.id==='userName')
 setNameError("")
 if(e.target.id==='phone')
 setPhoneError("")
  if(e.target.id==='email')
  setEmailError("")
   if(e.target.id==='address')
  setAddressError("")
  const newData={...data}
    newData[e.target.id]=e.target.value
    if(newData)
    setData(newData)
  }
return (
  <div style={{width:"50vh",margin:"auto"}} >
      <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
     
  <form onSubmit={(e)=>submit(e)}>
    <div>
        <label htmlFor="userName">UserName :</label>
      <input type="text" id="userName"   onChange={(e)=>handle(e)} value={data.userName||""}  className="form-control form-group" />
    </div>
    {nameError && <div style={{color:"red"}}>
      {nameError}</div>}
     <div>
      <label htmlFor="phone">Mobile No :</label>
      <input type="tel" id="phone"  onChange={(e)=>handle(e)} value={data.phone||""}  className="form-control form-group"/>
    </div>
    {phoneError && <div style={{color:"red"}}>
      {phoneError}</div>}
     <div>
      <label htmlFor="email">Email :</label>
      <input type="text" id="email"   onChange={(e)=>handle(e)} value={data.email||""}  className="form-control form-group"/>
    </div>
    {emailError && <div style={{color:"red"}}>
      {emailError}</div>}
     <div>
      <label htmlFor="address">Address :</label>
      <input type="text" id="address"   onChange={(e)=>handle(e)} value={data.address||""}  className="form-control form-group"/>
    </div>
      {addressError && <div style={{color:"red"}}>
      {addressError}</div>}
     <div></div>
    
   <button className="btn btn-dark mt-3" type="submit">Submit</button>
    {isOpen && <Popup
      content={<>
        <p style={{color:"#39C16C",font:"50rem"}}>User added successfully</p>
      </>}
      setIsOpen={setIsOpen}
    />}
  </form>
 </div>

  
)

}
   
export default Register;
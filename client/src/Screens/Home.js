 import React,{useEffect,useState} from 'react';
 import {Alert} from 'react-bootstrap'
 import {Link, Redirect} from 'react-router-dom' 
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Registration from '../Components/Registration'
  import Profile from '../Components/Profile'
  import 'bootstrap/dist/css/bootstrap.min.css';
 import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";
import axios from 'axios';
 const Home=()=>{
    const[isRegistered,setIsRegistered]=useState(false)
     const[data,setData]=useState(false)
     const isLogin=async()=>{
         try
         {
      const{data}= await axios.get("http://localhost:4000/api/user/auth",{
           withCredentials:true
       })
    setData(data)
    }
    catch(error){
        console.log(error)

    }
}
     useEffect(()=>{
            isLogin()
     },[])
         return (
             <Container >
                 {data ?
                 <Row>
                     <Col>
                         <Tabs defaultActiveKey="Register" 
                               id="controlled-tab-example" style={{justifyContent:"space-between",color:"white"}}>
                             <Tab eventKey="home" title="Register" >
                                 <Registration setIsRegistered={setIsRegistered}/>
                             </Tab>
                             <Tab eventKey="profile" title="Profile">
                                 <Profile isRegistered={isRegistered}/>
                             </Tab>
                             
                         </Tabs>
                     </Col>
                 </Row> :
                 <Alert  variant="danger">
         Log in to continue <Link to='/'>Log In</Link>
  </Alert>

}
             </Container>
         );
     }
 
 
 export default Home;
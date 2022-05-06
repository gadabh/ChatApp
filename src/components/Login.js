import React from 'react' ;

import {GoogleOutlined  } from '@ant-design/icons';


import { auth } from '../firebase';




import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import Articles from './Articles';


const Login=()=>{
    return (
       
     <div id ='login-page'>

     <div id ='login-card'>

          <img  id ='left' alt='img' width="270" height="61"  src={require("./img/isi-logo2.png")} />

          <img id ='right' alt='img' width="100" height="61"  src={require("./img/utm.png")} />
     
      <div>
      </div>
      


<div>
<br/>  <br/>  <br/>  <br/>  <br/>  <br/>
 
</div>



<div className="container">
     
<div className="row">
             
                  <Articles/>
               
      
        
    
       
    
    </div>
</div>
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
 
                     
                  <br/>

                  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/> 
        <div
        className="login-button google"
       onClick={()=>  auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
           

           <GoogleOutlined/> Sign In With Google 
        </div>

         

       
 
       
     </div>





 </div>
 
 
    );
}
export default Login ;
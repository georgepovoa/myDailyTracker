import styled from "styled-components";
import { useState,useEffect } from "react";
import auth from "./auth";


const RegisterContainer = styled.div`
width:100%;
height:100%;
position:absolute;
background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

const RegisterBox = styled.div`

display:flex;
flex-direction:column;
width:30%;
height:80%;
margin-left:35%;
margin-top:5%;

background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
align-items: center;


`

const Input = styled.input`
background:none;
border:none;
border-bottom:1px solid black;
width:50%;
text-align:center;
font-size:16px;
font-weight:600;
&:focus {
    outline: none;
    border-shadow:none;
}
` 

const RegisterButton = styled.button`
background:none;
border:none;
font-size:18px;
color:black;
font-weight:600;
margin-top:65px;
border-bottom:1px solid black;
padding:15px;
&:hover {
    cursor: pointer;
}

`




export default function RegisterPage(){


    const [email,setEmail] = useState();
    const [password,setPassowrd] = useState();

    



    async function handleSubmit(){
        console.log(email,password)
        const authentication = await auth.register(email,password)
        console.log(authentication)
    }
    return(
        <RegisterContainer>
            <RegisterBox>
                <h6>Register</h6>
                <h1>:)</h1>
                
                
                <h3>E-mail</h3>
                <Input onChange={e => setEmail(e.target.value)}></Input>
                
                
                <h3>Password</h3>
                <Input type={"password"} onChange={e => setPassowrd(e.target.value)}></Input>
                

                <RegisterButton onClick={() => handleSubmit(email,password)} >Register</RegisterButton>
                

                
            </RegisterBox>
            
        </RegisterContainer>
    )

}
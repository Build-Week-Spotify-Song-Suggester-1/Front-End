import React, { useState } from "react"; 
import styled from 'styled-components';

const Div = styled.div`
    
    background-color: #171330;
    color: #FFF2F2;
    font-family: Muli;
    width: 50%;
    margin: auto;
    padding: 2.5rem;
    border: 5px solid #fa4252;
  `;

  const Ul = styled.div`
    list-style-type:none;
    line-height: 2.5;
    `

  const Button = styled.div`
    box-shadow:inset 0px 0px 9px 0px #fbafe3;
	background:linear-gradient(to bottom, #ff5bb0 5%, #ef027d 100%);
	background-color:#EF019F;
	border-radius:6px;
	border:1px solid #ee1eb5;
	display:inline-block;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	padding:6px 40px;
	text-decoration:none;
	text-shadow:0px 1px 0px #c70067;
`;
// .myButton:hover {
// background: #1C6EA4; }
// .myButton:active {
// background: #144E75; }



const RegForm = props => {
    const [Reguser, setRegUser] = useState({
        username: "", 
        email: "",
        Password: ""
        
    });

    const handleChanges = event => {
        setRegUser({ ...Reguser, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewUser(Reguser);
        setRegUser({ username: "", email: "", password: ""});
    };

    return(
        <Div>
        <form onSubmit={submitForm}>
            <h2>Sign Up!</h2>
            <fieldset>
            <legend>Create Account</legend>
            <Ul>
                <li>
                  <label htmlFor= "username">Username </label>
                    <input 
                       id= "username"
                       type="text"
                       name="username"
                       placeholder="username"
                       onChange={handleChanges}
                       value={Reguser.username}
                    />
                </li>
                <li>
                    <label htmlFor= "email">Email </label>
                        <input
                        id= "email"
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={handleChanges}
                        value={Reguser.role}/>
               </li>

               <li>
                    <label htmlFor= "password">Password </label>
                        <input
                        id= "password"
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={handleChanges}
                        value={Reguser.role}/>
                </li>
            </Ul>
            </fieldset>
           
                <Button type='submit'>Submit</Button>
           
                <Button type="button">Have an Account?</Button>
           
        </form>
       </Div>
    );
};
export default RegForm;
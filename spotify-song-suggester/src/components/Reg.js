import React, { useState } from "react"; 
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    background-color: #171330;
    color: #FFF2F2;
    font-family: Muli;
    width: 50%;
    margin: auto;
    padding: 2.5rem 3rem 2.5rem 5rem;
    border: 5px solid #fa4252;
  `;

  const Ul = styled.div`
    list-style-type:none;
    line-height: 2;
    padding: 2rem 3.5rem;

    `

  




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
                  <label htmlFor= "username">Username</label>
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
                    <label htmlFor= "email">Email</label>
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
           
                <button type='submit'>Submit</button>
           
                <button type="button">Have an Account?</button>
           
        </form>
       </Div>
    );
};
export default RegForm;
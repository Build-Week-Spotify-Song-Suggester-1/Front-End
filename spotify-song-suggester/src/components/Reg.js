import React, { useState } from "react"; 
import styled from 'styled-components';



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
        <form onSubmit={submitForm}>
            <h2>Sign Up!</h2>
            <fieldset>
            <legend>Create Account</legend>
            <ul>
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
                    <label htmlFor= "password">Password</label>
                        <input
                        id= "password"
                        type="text"
                        name="password"
                        placeholder="password"
                        onChange={handleChanges}
                        value={Reguser.role}/>
                </li>
            </ul>
            </fieldset>
        
            <button type='submit'>Submit</button>
            <button type="button">Have an Account?</button>
        
        </form>

    );
};
export default RegForm;
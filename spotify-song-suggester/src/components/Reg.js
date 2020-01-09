import React, { useState } from "react"; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    background-color: #171330;
    color: white;
    font-family: Muli;
    width: 50%;
    margin: auto;
    padding: 2.5rem 3rem 2.5rem 5rem;
    border: 5px solid #fa4252;
  `;




const validate = ({ username, password}) => {
    const errors = {};
    if (!username){
        errors.username = "You need a username!"
    } else if (username.length < 3) {
        errors.username = "You need a longer name!"
    }
    if (!password) {
        errors.age = "You need a password"
    } else if (password.length < 4) {
        errors.name = "You need a longer password!"
    }
    return errors;
}

const Register = props => {
    const [registerData, setRegisterData] = useState({
        username: "", 
        Password: ""
        
    });

    return(
        <Div className='form-login'>
            <h2>Register</h2>
          <Formik
            onSubmit={(values, tools) =>{
            tools.resetForm();
        }}

            validate={validate}
            initialValues={{
                username: '',
                password: ''
            }}
           
         render={props => {
                return (
                  <Form>
                    <Field name="username" type="text" placeholder="enter username" />
                    <ErrorMessage name="username" component="div" className="red" />

                    <Field name="password" type="text" placeholder="enter password" />
                    <ErrorMessage name="password" component="div" className="red" />
                
                    <button type='submit'>Submit</button>
                    <Link to='/login'><button>Login</button></Link>
                 </Form>
           );
          }}
         />
        
       </Div>
    );
};
export default Register;


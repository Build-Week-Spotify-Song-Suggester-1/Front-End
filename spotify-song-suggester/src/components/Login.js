// import React, { useState } from "react"; 
// import styled from 'styled-components';



// const LoginForm = props => {
//     const [Loginuser, setLoginUser] = useState({
//         username: "", 
//         Password: ""
        
//     });

//     const handleChanges = event => {
//         setLoginUser({ ...Loginuser, [event.target.name]: event.target.value});
//     };

//     const submitForm = event => {
//         event.preventDefault();
//         props.addNewUser(Loginuser);
//         setLoginUser({ username: "", email: "", password: ""});
//     };

//     return(
//         <form onSubmit={submitForm}>
//             <h2>Log In</h2>
//             <fieldset>
//              <label htmlFor= "username">Username</label>
//                 <input 
//                 id= "username"
//                 type="text"
//                 name="username"
//                 placeholder="username"
//                 onChange={handleChanges}
//                 value={Loginuser.username}
//                 />
            
//             <label htmlFor= "password">Password</label>
//                 <input
//                 id= "password"
//                 type="text"
//                 name="password"
//                 placeholder="password"
//                 onChange={handleChanges}
//                 value={Loginuser.role}/>
//             </fieldset>
        
//             <button type='submit'>Log In</button>
        
//         </form>

//     );
// };
// export default LoginForm;
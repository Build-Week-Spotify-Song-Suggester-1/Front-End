<<<<<<< HEAD
// import React from "react";
// import Styled from "styled-components";

// const Header = styled.div`
//   width: 80vw;
//   height: 15vh;
//   background: red;
// `;

// export default Header;
=======
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form className="searchBar" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="searchBarInner"
        type="text"
        placeholder="search"
        name="search"
        ref={register({ min: 1 })}
      />

      <input type="submit" />
    </form>
  );
}
>>>>>>> e881f65788cfb4d26f3d15c9227f4b37642dd7b2

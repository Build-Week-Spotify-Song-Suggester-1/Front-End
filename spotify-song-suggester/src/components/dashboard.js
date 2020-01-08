


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


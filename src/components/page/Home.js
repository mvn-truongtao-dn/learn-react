import React from "react";
import Form from "../Form";
import Listuser from "../Listuser";

export default function Home({ list, handleDelete, handleAddUser }) {
  return (
    <>
      <Listuser listUser={list} handleDelete={handleDelete} />
      <Form handleAddUser={handleAddUser}></Form>
    </>
  );
}

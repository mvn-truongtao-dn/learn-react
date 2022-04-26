import React from "react";
import { useEffect } from "react";

export default function ItemuserAPI(props) {
  const { data } = props;
  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>{data.email}</td>
        <td>{data.first_name}</td>
        <td>{data.last_name}</td>
        <td><img src={data.avatar}/></td>
      </tr>
    </>
  );
}

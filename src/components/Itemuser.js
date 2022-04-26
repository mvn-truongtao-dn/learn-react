import React from "react";
import { useEffect } from "react";

export default function Itemuser(props) {
  const { data, handleDelete } = props;
  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.password}</td>
        <td>{data.country}</td>
        <td>{data.gender}</td>
        <td>{data.info}</td>
        <td>{data.accpect.toString()}</td>
        <td>
          <button className="btn-delete" onClick={() => handleDelete(data)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

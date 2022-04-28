import React from "react";

export default function UserItem(props) {
  const { first_name, last_name, email, avatar } = props.item;
  return (
    <div className="details-user">
      <img src={avatar}></img>
      <div className="content-user">
        <h1 className="name-user">
          {last_name} {first_name}
        </h1>
        <h2 className="email-user">{email}</h2>
      </div>
    </div>
  );
}

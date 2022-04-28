import React from "react";
import UserItem from "../../components/modules/UserItem";

export default function Home({ listuser }) {
  return (
    <main className="page-main container">
      <h1>It is page Home</h1>
      <div className="list-user flex-space-between">
        {listuser.map((item) => (
          <UserItem item={item}/>
        ))}
      </div>
    </main>
  );
}

import React from 'react'

export default function FormUser(props) {
  return (
    <div className="block-formuser">
      <form onSubmit={props.handleSubmit}>
        {props.children}
      </form>
    </div>
  )
}

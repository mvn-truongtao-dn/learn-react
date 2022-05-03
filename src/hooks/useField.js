import React, { useState } from "react";

export default function useField(type,initialState) {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return {
    type,
    value,
    onChange,
  };
}

import React, { useState } from "react";

export default function useField(type, initialState) {
  const [value, setValue] = useState(initialState);
  const [checked, setChecked] = useState(initialState);

  const onChange = (e) => {
    e.target.type === "checkbox"
      ? setChecked(e.target.checked)
      : setValue(e.target.value);
  };

  return {
    type,
    value,
    checked,
    onChange,
  };
}

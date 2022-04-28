import React, { useState } from "react";
import useField from "../useField";

export default function Form(props) {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [country, setCountry] = useState('vn');
  const [gender, setGender] = useState("male");
  // const [info, setInfo] = useState('');
  // const [accpect, setrAccpect] = useState(true);
  // const { value, onChange, reset } = useInputState();
  const name = useField("text", "");
  const password = useField("password", "");
  const country = useField("", "vn");
  // const gender = useField("radio","male");
  // const gender2 = useField("radio", "female");
  const info = useField("text", "");
  const accpect = useField("checkbox", true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gender.value);
    // console.log("ok");
    const id = Math.floor(Math.random() * 1000);
    const newItem = {
      id: id,
      name: name.value,
      password: password.value,
      country: country.value,
      gender: gender,
      info: info.value,
      accpect: accpect.checked,
    };
    props.handleAddUser(newItem);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">Name</label>
          <div className="col-12">
            {/* <input value={name} type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} /> */}
            <input {...name} />
          </div>
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <div className="col-12">
            {/* <input value={password} type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} /> */}
            <input {...password} />
          </div>
        </div>
        <div className="row">
          <label htmlFor="">Country</label>
          <div className="col-6">
            <select {...country}>
              <option value="vn">Vietnam</option>
              <option value="usa">United States </option>
              <option value="jav">Japan</option>
            </select>
          </div>
        </div>
        <div className="row">
          <label htmlFor="gender">Gender</label>
          <div className="col">
            <div className="col-6">
              <input
                checked={gender === "male"}
                type="radio"
                value="male"
                id="male"
                onChange={(e) => setGender(e.target.value)}
              />
              {/* <input {...gender} /> */}
              <label htmlFor="male">Male</label>
            </div>
            <div className="col-6">
              <input
                checked={gender === "female"}
                type="radio"
                value="female"
                id="female"
                onChange={(e) => setGender(e.target.value)}
              />
              {/* <input {...gender2} /> */}
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="row">
          <label htmlFor="info">Information</label>
          <div className="col-12">
            {/* <textarea value={info} name="info" id="info" cols="30" rows="10" onChange={(e)=> setInfo(e.target.value)}></textarea> */}
            <textarea {...info} />
          </div>
        </div>
        <div className="row">
          <label htmlFor="accpect">Do you agree to the terms?</label>
          {/* <input  
            checked={accpect}
            id="accpect" name="accpect" 
            type="checkbox" 
            onChange={(e)=> setAccpect(e.target.checked)}
            /> */}
          <input {...accpect} />
        </div>
        <div className="col-12">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

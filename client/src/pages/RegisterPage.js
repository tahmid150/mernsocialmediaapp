import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  async function register(ev){
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/register', {
        method:'POST',
        body: JSON.stringify({username, password,fname,lname}),
        headers:{'Content-Type':'application/json'},
    }); 
    if(response.status === 200){
        alert('Registration Successful');
    }else{
        alert('Registration Failed');
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Enter Your First Name"
        value={fname}
        onChange={(ev) => setFirstname(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your Last Name"
        value={lname}
        onChange={(ev) => setLastname(ev.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Your E-mail"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />

      <button className="regilogin">Register</button>
    </form>
  );
}

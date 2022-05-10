import { useState } from "react";

function FormApi() {
    const [apiData,setApiData]=useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    try {
      let res = await fetch("http://mdshahalam.design/getwebapi/wp-json/mos-getweb-api/v1/contact-data", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer my-token',
            //'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          //mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
          //console.log(res);
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    console.log(apiData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default FormApi;
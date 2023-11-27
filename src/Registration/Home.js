import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import "../Registration/Home.css";

const Home = () => {
  const history = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
  console.log(inputvalue);
  const getdata = (e) => {
    const { value, name } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };
  const [error, setError] = useState(false);
  const adddata = (e) => {
    e.preventDefault();
    // const {fname,lname,email,password}=inputvalue;
    if (inputvalue.fname.trim() === "") {
      //inputvalue it seems to be an object or variable holding from input values, such as email,password
      setError(true);
    } else if (inputvalue.lname.trim() === "") {
      //this is a condition statemnet used to check series of conditions
      setError(true);
    } else if (
      inputvalue.email.trim() === "" || // this checks if email is empty string and remove spaces
      !inputvalue.email.includes("@") // this checks email does not contain the @ symbol or not
    ) {
      setError(true);
    } else if (
      inputvalue.password.trim() === "" ||
      inputvalue.password.length <= 5
    ) {
      setError(true);
    } else {
      localStorage.setItem(
        // this code stores the users registration data in the browser localstorage it uses the setitem method
        "Registration", // to save the data  under the key registration it converts the existing data array and the new inputvalue
        JSON.stringify([...data, inputvalue]) // to the json string using json.stringify and then stores it
      );
      history("/Login");
    }
  };
  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-8">Sign up</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="fname"
                onChange={getdata}
                placeholder="Enter FirstName"
              />
              {error && inputvalue.fname <= 0 ? (
                <label>Enter FirstName</label>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="lname"
                onChange={getdata}
                placeholder="Enter LastName"
              />
              {error && inputvalue.lname <= 0 ? (
                <label>Enter LastName</label>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={getdata}
                placeholder="Enter email"
              />
              {error &&
                (inputvalue.email === "" ||
                  !inputvalue.email.includes("@")) && (
                  <label>Enter valid email Address</label>
                )}
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={getdata}
                placeholder="Password"
              />
              {error &&
                (inputvalue.password === "" ||
                  inputvalue.password.length < 7) && (
                  <label>Enter Passsword "password must be length of 7"</label>
                )}
            </Form.Group>
            <button className="submitbtn" onClick={adddata}>
              Submit
            </button>
          </Form>
          <p className="mt-4">
            Already have User?{" "}
            <span>
              <NavLink to="/Login">SIGN IN</NavLink>
            </span>
          </p>
        </div>

        <div className="right_data">
          <div className="sign_img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKFlcrCGt86VuJdVR6FA6o8G7iyFQPIDDp0taoD-Sag&usqp=CAU&ec=48600113"
              style={{ maxWidth: 480 }}
              alt="SignUp Logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;

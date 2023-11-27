import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Registration/Home.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    email: "",
    password: "",
  });
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
  const [error, setError] = useState(false); // the initial value of error is set to false it is used to manage and display error messages
  const adddata = (e) => {
    e.preventDefault(); // this command is used to handle form submission without page refresh
    const getuserarr = localStorage.getItem("Registration"); // it retrievs the value associated with the key registration form the browser localstoreage and stores in the getuser
    const { email, password } = inputvalue;
    if (email.trim() === "") {
      setError("Enter Email");
    } else if (password.trim() === "") {
      setError("Enter Passsword");
    } else {
      if (getuserarr && getuserarr.length) {
        //this condition checks if getuserarr is not falsy and has a length greather than zero
        const userdata = JSON.parse(getuserarr); //if there is userdata in getusearr this line parse the json data stroed in getuser and assign it to the userdata variable
        const userlogin = userdata.filter((el, k) => {
          // this filter method is used to iterate through the userdata and create a new array userlogin
          return el.email === email && el.password === password; //it will checks if the email and password math the values provided in the current form
        });
        if (userlogin.length === 0) {
          // this checks if the userlogin array is empty, which means no mathching user was found based on the provided amila and password.
          alert("Enter Valid Details");
        } else {
          history("/card"); //if matches was found the code redirects to the card route
        }
      }
    }
  };
  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-7 ">SIGN IN</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-7 " controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
                {error && inputvalue.email <= 0 ? (
                  <label>Enter FirstName</label>
                ) : (
                  ""
                )}
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-7"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
                {error && inputvalue.password <= 0 ? (
                  <label>Enter FirstName</label>
                ) : (
                  ""
                )}
              </Form.Group>

              <button className="submitbtn" onClick={adddata}>
                Submit
              </button>
            </Form>
            <p className="mt-3">
              Need An Account?{" "}
              <span>
                <NavLink to="/">SIGN UP</NavLink>
              </span>
            </p>
          </div>

          <div className="right_data">
            <div className="sign_imgs">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Q9FonkiuDrT72BdMThtmCVBcc5LpLX_Vngf_F__Wkw&usqp=CAU&ec=48600113"
                style={{ maxWidth: 480 }}
                alt="SignUp Logo"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;

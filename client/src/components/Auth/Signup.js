import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../../assests/images/logo.png";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/auth-signup",
        formData
      );
      if (response.status === 200) {
        toast.success("Signup successful");
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Signup failed");
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
      }}
      onSubmit={handleSubmit}
    >
      <img
        src={loginImage}
        alt="Login"
        style={{ marginBottom: "1rem", width: "200px" }}
      />
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="standard"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        placeholder="abc@gmail.com"
        variant="standard"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <TextField
        id="password"
        name="password"
        label="Password"
        variant="standard"
        type="password"
        required
        value={formData.password}
        onChange={handleChange}
      />
      <TextField
        id="phone"
        name="phone"
        label="Phone"
        variant="standard"
        type="tel"
        placeholder="+923"
        required
        value={formData.phone}
        onChange={handleChange}
      />
      <Button variant="outlined" type="submit">
        Submit
      </Button>
      <Link to="/login" underline="hover">
        {"Already have an Account?"}
      </Link>
      <ToastContainer />
    </Box>
  );
}

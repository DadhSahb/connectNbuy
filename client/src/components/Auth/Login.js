import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assests/images/logo.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "http://localhost:5000/auth/auth-login",
        formData
      );
      if (response.status === 200) {
        toast.success("Welcome to ConnctNBuy");
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Invalid Credentials");
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

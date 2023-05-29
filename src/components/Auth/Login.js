import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login() {
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
        marginTop: "10rem",
      }}
    >
      <TextField
        id="standard-basic"
        label="Email"
        placeholder="abc@gmail.com"
        variant="standard"
        type="email"
        required
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        required
      />
      <Button variant="outlined" type="submit">
        Submit
      </Button>
      <Link to="/signup" underline="hover">
        {"Dont have an Account?"}
      </Link>
    </Box>
  );
}

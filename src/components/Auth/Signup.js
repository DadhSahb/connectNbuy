import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Signup() {
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
        label="Name"
        variant="standard"
        type="name"
        required
      />
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
        label="Contact"
        variant="standard"
        type="tel"
        placeholder="+923"
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
      <Link to="/login" underline="hover">
        {"Already have an Account?"}
      </Link>
    </Box>
  );
}

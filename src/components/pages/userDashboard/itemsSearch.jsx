import React from "react";
import styles from "../../../assests/styles/UserDashboard.module.css";
import TextField from "@mui/material/TextField";

export default function itemsSearch() {
  return (
    <div>
      {" "}
      <div className={styles.Main}>
        <div className={styles.category}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
      </div>
    </div>
  );
}

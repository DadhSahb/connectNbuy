import { Typography, TextField } from "@mui/material";
import React from "react";
import styles from "./Profile.module.css";
export default function Account() {
  return (
    <div className={styles.Main}>
      <div className={styles.abc}>
        <div className={styles.imageContainer}>
          {/* <img src={user.img} /> */}
          <div className={styles.userImg}>
            <img
              src={
                "http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png"
              }
            ></img>
            <div className={styles.imgText}>
              <label for="files" class="btn33">
                Change Image
              </label>
              <input
                accept=".png,.jpg,.jpeg,.jfif"
                // onChange={fileHandler}
                id="files"
                style={{ visibility: "hidden" }}
                type="file"
              />
            </div>
          </div>
        </div>

        <div className={styles.formmm}>
          <h1>USER DETAILS</h1>
          <form
            // ref={formRef}
            // onSubmit={(e) => handleJob(e)}
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              // marginTop: '20px',
            }}
            className={styles.formContainer}
          >
            <TextField
              className={styles.input}
              id="standard-helperText"
              label="User Name"
              // value={name}
              helperText="Enter username"
              variant="standard"
              name="title"
              // onChange={(e) => setName(e.target.value)}
              required
            />

            <TextField
              className={styles.input}
              id="standard-helperText"
              label="Email"
              // value={email}
              variant="standard"
              required
            />
            <TextField
              className={styles.input}
              id="standard-helperText"
              label="AGE"
              // value={licenseNumber}
              variant="outlined"
              name="License"
              type="number"
              // onChange={(e) => setLicenseNumber(e.target.value)}
              required
            />

            <TextField
              className={styles.input}
              id="standard-helperText"
              label="Phone Number"
              // value={panNumber}
              variant="outlined"
              name="title"
              type="number"
              // onChange={(e) => setPanNumber(e.target.value)}
              required
            />
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <button type="submit">Update</button>
        {/* {users.authorized === 0 && <button onClick={handleApproval}>Request Approval</button>} */}
      </div>
    </div>
  );
}

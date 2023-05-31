import { Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import styles from "../../../assests/styles/Profile.module.css";
import Categories from "./categories";
import { toast } from "react-toastify";

export default function Buy() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newItem = {
        title,
        description,
        category,
      };

      const response = await axios.post("http://localhost:5000/item", newItem);
      if (response.status === 200) {
        toast.success("Item added Successfully");
      }
      console.log(response.data);

      // Reset form fields after successful submission
      setTitle("");
      setDescription("");
      setCategory("");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        toast.error("Invalid Request");
      }
    }
  };

  return (
    <div className={styles.Main}>
      <div className={styles.abc}>
        <div className={styles.imageContainer}>
          {/* <img src={user.img} /> */}
          <div className={styles.userImg}>
            <img
              src="http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile.png"
              alt="User Profile"
            />
            <div className={styles.imgText}>
              <label htmlFor="files" className="btn33">
                Upload image
              </label>
              <input
                accept=".png,.jpg,.jpeg,.jfif"
                id="files"
                style={{ visibility: "hidden" }}
                type="file"
              />
            </div>
          </div>
        </div>
        <div className={styles.formmm}>
          <h1>Buy Request</h1>
          <form
            onSubmit={handleSubmit}
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
              id="title"
              label="Title"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <TextField
              className={styles.input}
              id="description"
              label="Description"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <h4>Select Category</h4>
            <Categories
              selectedCategory={category}
              onCategoryChange={(category) => setCategory(category)}
            />

            <button type="submit">Create Item</button>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        {/* {users.authorized === 0 && <button onClick={handleApproval}>Request Approval</button>} */}
      </div>
    </div>
  );
}

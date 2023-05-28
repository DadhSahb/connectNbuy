import React, { useState } from "react";
import styles from "../../../assests/styles/UserDashboard.module.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Search from "./LocationSearch";
import itemsSearch from "./itemsSearch";

export default function Categories({ category, setCategory }) {
  return (
    <div className={styles.Main}>
      <div className={styles.category}>
        <FilterAltIcon style={{ fontSize: "30px" }} />
        <select
          defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Accessories">Accessories</option>
          <option value="Property for Sale">Property for Sale</option>
          <option value="Property for Rent">Property for Rent</option>
          <option value="Vehicles">Vehicles</option>=
          <option value="Bikes">Bikes</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Electronics & Home Appliances ">
            Electronics & Home Appliances{" "}
          </option>
          <option value="Bussiness,Industrial & Appliances">
            Bussiness,Industrial & Appliances
          </option>
          <option value="Services">Services</option>
          <option value="Jobs">Jobs</option>
          <option value="Animals">Animals</option>
          <option value="Furniture & Home Decor">Furniture & Home Decor</option>
          <option value="Fashion & Beauty">Fashion & Beauty</option>
          <option value="Books,Sports & Hobbies">Books,Sports & Hobbies</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <itemsSearch />
      <Search />
    </div>
  );
}

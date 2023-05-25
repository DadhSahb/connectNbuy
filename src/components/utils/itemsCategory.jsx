import React, { useState } from "react";
import styles from "../userDashboard/UserDashboard.module.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
export default function ItemsCategory() {
  const [category, setCategory] = useState("All");
  // const [items, setItems] = useState([]);
  //   const [allItems, setAllItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = 10;

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const allItems = [
    {
      id: 1,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 2,
      imageURL:
        "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6pro-5g-oversea/listpage/Phone-List-Page-product-list-Black-427-x-600.png.thumb.webp",
      title: "Oppo",
      description: "12gb RAM, 512gb ROM, HDR display and much more",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 3,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 4,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 5,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 6,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 7,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 8,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 9,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 10,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 11,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
    {
      id: 12,
      imageURL:
        "https://silkavenue.pk/wp-content/uploads/2019/06/AG00712_Nude__1_.jpg",
      title: "Bag",
      description:
        "Made with premium lather and have five pockets with two hidden compartments",
      startTime: currentTime,
      currentDate: currentDate,
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.Main}>
      <div className={styles.category}>
        <FilterAltIcon style={{ fontSize: "30px" }} />
        <select
          defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Property for Sale">Property for Sale</option>
          <option value="Property for Rent">Property for Rent</option>
          <option value="Vehicles">Vehicles</option>
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

      {/* <div className={styles.cardHolder}>
        {items
          .filter((i) => i.category === category && category !== "All")
          .map((item, index) => {
            return (
              <div key={item.id} className={styles.job}>
                <div className={styles.head}>
                  <div
                    className={styles.companyLogo}
                    style={{
                      backgroundImage: `url(${item.imageURL})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <p className={styles.jobTitle}>{item.title}</p>
                <p className={styles.jobDescription}>{item.description}</p>
                <div className={styles.abc}>
                  <div className={styles.hold2}>Starts at {item.startTime}</div>

                  <div className={styles.hold}>Ends at {item.endTime}</div>
                </div>

                <div className={styles.footer}>
                  <p>
                    Ends In: <span></span>{" "}
                  </p>
                  <Link to="Buyitem">
                    <button className={styles.apply}>Sell</button>
                  </Link>
                  <button className={styles.apply2}>Chat</button>
                </div>
              </div>
            );
          })}
*/}
      <div className={styles.jobitemlist}>
        {category === "All" &&
          allItems.map((item) => {
            return (
              <div key={item.id} className={styles.job}>
                <div className={styles.head}>
                  <div
                    className={styles.companyLogo}
                    style={{
                      backgroundImage: `url(${item.imageURL})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <p className={styles.jobTitle}>{item.title}</p>
                <p className={styles.jobDescription}>{item.description}</p>
                <div className={styles.abc}>
                  <div className={styles.hold2}>Starts at {item.startTime}</div>
                  <div className={styles.hold}>Date{item.currentDate}</div>
                </div>

                <div className={styles.footer}>
                  <Link to="/">
                    <button className={styles.apply}>Buy</button>
                  </Link>
                  <button className={styles.apply2}>Connect</button>
                </div>
              </div>
            );
          })}
      </div>
      <Pagination
        items={allItems.length}
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

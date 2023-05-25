import React from "react";
import styles from "../../../assests/styles/UserDashboard.module.css";
import { Link } from "react-router-dom";
export default function ItemsCategory({ items }) {
  return (
    <div className={styles.Main}>
      <div className={styles.cardHolder}>
        {items.map((item) => {
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
      </div>
    </div>
  );
}

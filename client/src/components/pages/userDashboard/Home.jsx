import React, { useState } from "react";
import ItemsCategory from "./itemsCategory";
import Pagination from "./pagination";
import Categories from "./categories";
import { getItems } from "../../../servies/fakeItems";
function UserDashboard() {
  const [items, setItems] = useState(getItems());
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("All");
  const pageCount = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    let i = getItems().filter(
      (x) => category === "All" || x.category === category
    );
    setItems(i);
  }, [category]);

  return (
    <>
      <Categories category={category} setCategory={setCategory} />
      <ItemsCategory items={items} />
      <Pagination
        items={items.length}
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default UserDashboard;

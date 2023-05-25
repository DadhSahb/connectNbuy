import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import _ from "lodash";

export default function CustomPagination({
  items,
  currentPage,
  pageCount,
  onPageChange,
}) {
  const pageSize = items / pageCount;
  if (Math.ceil(pageSize === 1)) return null;
  const pages = _.range(1, pageSize + 1);
  return (
    <Stack
      spacing={2}
      style={{
        alignContent: "center",
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pagination>
        {pages.map((page) => (
          <PaginationItem>{page}</PaginationItem>
        ))}
      </Pagination>
    </Stack>
  );
}

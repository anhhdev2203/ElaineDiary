import Pagination from "@mui/material/Pagination";
import usePagination from "./Panigation";
import { DATASTORE } from "../../MyDiaryDetail/data/storeDiary";

export default function Navigation({ page, setPage }) {
  const PER_PAGE = 6;

  const changePage = usePagination(DATASTORE, PER_PAGE);
  const count = Math.ceil(DATASTORE.length / PER_PAGE);
  const handleChange = (e, value) => {
    console.log(value);
    setPage(value);
  };
  return (
    <>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          scale: "1.4",
          alignItems: "center",
          width: "inherit",
        }}
        count={count}
        variant="contained"
        orientation="vertical"
        aria-label="vertical contained button group"
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </>
  );
}

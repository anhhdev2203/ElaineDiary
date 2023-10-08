import Pagination from "@mui/material/Pagination";
export default function Navigation({ page, setPage, value }) {
  const PER_PAGE = 9;

  const count = Math.ceil(value.length / PER_PAGE);
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

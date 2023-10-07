import { Button, Grid } from "@mui/material";

export default function Nagivation() {
  return (
    <>
      <Grid
        direction="row"
        container
        // spacing={-2}
        justifyContent="center"
        alignItems="center"
        padding={5}
        position={"absolute"}
      >
        <Button
          sx={{
            my: 0.5,
            backgroundColor: "#E3B9DA",
            color: "#fff",
            ml: "10px",
          }}
          variant="contained"
          size="small"
          // onClick={handleCheckedLeft}
          // disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          &lt;
        </Button>
        <Button
          sx={{
            my: 0.5,
            backgroundColor: "#E3B9DA",
            color: "#fff",
            ml: "10px",
          }}
          variant="contained"
          size="small"
          // onClick={handleCheckedLeft}
          // disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          1
        </Button>
        <Button
          sx={{
            my: 0.5,
            backgroundColor: "#E3B9DA",
            color: "#fff",
            ml: "10px",
          }}
          variant="contained"
          size="small"
          // onClick={handleCheckedLeft}
          // disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          2
        </Button>
        <Button
          sx={{
            my: 0.5,
            backgroundColor: "#E3B9DA",
            color: "#fff",
            ml: "10px",
          }}
          variant="contained"
          size="small"
          // onClick={handleCheckedLeft}
          // disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          ...
        </Button>
        <Button
          sx={{
            my: 0.5,
            backgroundColor: "#E3B9DA",
            color: "#fff",
            ml: "10px",
          }}
          variant="contained"
          size="small"
          // onClick={handleCheckedLeft}
          // disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          9
        </Button>
        <Button
          sx={{
            my: 0.5,
            backgroundColor: "#E3B9DA",
            color: "#fff",
            ml: "10px",
          }}
          variant="contained"
          size="small"
          // onClick={handleCheckedLeft}
          // disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          10
        </Button>

        <Button
          sx={{
            my: 0.5,
            backgroundColor: "#E3B9DA",
            color: "#fff",
            ml: "10px",
          }}
          variant="contained"
          size="small"
          // onClick={handleCheckedRight}
          // disabled={leftChecked.length === 0}
          aria-label="move selected right"
        >
          &gt;
        </Button>
      </Grid>
    </>
  );
}

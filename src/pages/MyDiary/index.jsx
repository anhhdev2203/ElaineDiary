import { Link } from "react-router-dom";

function mydiary() {
  return (
    <div>
      <Link to={"1"}>
        <button>1</button>
      </Link>
      <Link to={"2"}>
        <button>2</button>
      </Link>
      <Link to={"3"}>
        <button>3</button>
      </Link>
      <Link to={"4"}>
        <button>4</button>
      </Link>
    </div>
  );
}

export default mydiary;

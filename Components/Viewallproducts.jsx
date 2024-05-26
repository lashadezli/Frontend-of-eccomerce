import classes from "../modules/View.module.scss";
import { Link } from "react-router-dom";

const ViewAll = () => {
  return (
    <div className={classes["View-all"]}>
      <Link to="/">View All Product</Link>
    </div>
  );
};

export default ViewAll;

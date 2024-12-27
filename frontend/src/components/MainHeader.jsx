import { Link } from "react-router-dom";
import { MdListAlt, MdOutlineCreate } from "react-icons/md";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdListAlt />
        React List
      </h1>
      <p>
        <Link to="/create_post" className={classes.button}>
          <MdOutlineCreate />
          New Post
        </Link>
      </p>
    </header>
  );
};
export default MainHeader;

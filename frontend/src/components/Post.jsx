import casses from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ id, author, body }) => {
  return (
    <li className={casses.post}>
      <Link to={id}>
        <p className={casses.author1}>{author}</p>
        <p className={casses.text}>{body}</p>
      </Link>
    </li>
  );
};
export default Post;

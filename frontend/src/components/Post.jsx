import casses from "./Post.module.css";

const Post = ({ author, body }) => {
  return (
    <li className={casses.post}>
      <p className={casses.author1}>{author}</p>
      <p className={casses.text}>{body}</p>
    </li>
  );
};
export default Post;

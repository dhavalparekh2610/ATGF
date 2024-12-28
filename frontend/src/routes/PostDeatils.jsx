import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();
  console.log("===>", post);

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes?.details}>
        <p className={classes.author}>{post?.author}</p>
        <p className={classes.text}>{post?.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const loader = async ({ params }) => {
  try {
    const response = await fetch("http://localhost:8080/posts/" + params.id);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const resData = await response.json();
    console.log("123======>", resData);
    return resData.post;
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
};

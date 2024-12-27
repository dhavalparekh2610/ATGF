import React, { useState } from "react";
import NewPostModule from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const NewPost = ({ onAddPost }) => {
  const [enterBody, setEnterBody] = useState("");
  const [enterAuthor, setEnterAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnterBody(event.target.value);
  };

  const authotChangeHandler = (event) => {
    setEnterAuthor(event.target.value);
  };
  const cancleHandler = () => {
    <Link to="/" />;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const postDate = {
      body: enterBody,
      author: enterAuthor,
    };
    onAddPost(postDate);
    cancleHandler();
  };

  return (
    <Modal>
      <form className={NewPostModule.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body"> Text</label>
          <textarea
            htmlFor="body"
            required
            rows={4}
            onChange={bodyChangeHandler}
          />
        </p>

        <p>
          <label htmlFor="body">Your Name</label>
          <textarea
            htmlFor="body"
            id="name"
            required
            onChange={authotChangeHandler}
          />
        </p>
        <p className={NewPostModule.action}>
          <Link to="/" className={NewPostModule.link} type="button">
            Cancle
          </Link>
          <Link
            to="/"
            className={NewPostModule.link}
            type="button"
            onClick={submitHandler}
          >
            Submit
          </Link>
        </p>
      </form>
    </Modal>
  );
};
export default NewPost;

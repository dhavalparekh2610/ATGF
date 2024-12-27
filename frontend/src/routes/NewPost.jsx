import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import NewPostModule from "./NewPost.module.css";
import Modal from "../components/Modal";

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={NewPostModule.form}>
        <p>
          <label htmlFor="body"> Text</label>
          <textarea id="body" name="body" required rows={4} />
        </p>

        <p>
          <label htmlFor="body">Your Name</label>
          <textarea id="name" name="author" required />
        </p>
        <p className={NewPostModule.action}>
          <Link to="/" className={NewPostModule.link} type="button">
            Cancle
          </Link>
          <button type="submit" className={NewPostModule.link}>
            Submit
          </button>
        </p>
      </Form>
    </Modal>
  );
};
export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: "text", name: "name" }
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
};

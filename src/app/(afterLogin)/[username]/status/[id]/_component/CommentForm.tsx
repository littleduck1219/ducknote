"use client";

import React, { useState } from "react";
import style from "./commentForm.module.css";

const CommentForm = () => {
  const [content, setContent] = useState("");

  const me = { id: "littleduck1219", image: "/littleduck-logo.png" };
  const onClickButton = () => {};

  const onSubmit = () => {};

  const onChange = () => {};

  return (
    <form className={style.postForm} onSubmit={onSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <img src={me.image} alt={me.id} />
        </div>
      </div>
      <div className={style.postInputSection}>
        <textarea value={content} onChange={onChange} placeholder="답글게시" />
      </div>
    </form>
  );
};

export default CommentForm;

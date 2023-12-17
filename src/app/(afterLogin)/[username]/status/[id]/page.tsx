import React from 'react';
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./singlePost.module.css"

const SinglePost = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>게시하기</h3>
            </div>
        </div>
    );
};

export default SinglePost;
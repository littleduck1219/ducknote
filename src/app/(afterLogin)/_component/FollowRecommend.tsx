"use client";

import React from "react";
import style from "./followRecommend.module.css";
import Image from "next/image";

const FollowRecommend = () => {
    const user = { id: "littleduck1219", nickname: "littleduck", image: "/littleduck-logo.png" };

    const onFollow = () => {};

    return (
        <div className={style.container}>
            <div className={style.userLogoSection}>
                <div className={style.userLogo}>
                    <img src={user.image} alt={user.id} />
                </div>
            </div>
            <div className={style.userInfo}>
                <div className={style.title}>{user.nickname}</div>
                <div className={style.count}>@{user.id}</div>
            </div>
            <div className={style.followButtonSection}>
                <button onClick={onFollow}>팔로우</button>
            </div>
        </div>
    );
};

export default FollowRecommend;

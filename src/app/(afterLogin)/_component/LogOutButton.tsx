"use client";

import React from "react";
import style from "./logOutButton.module.css";
import Image from "next/image";

const LogOutButton = () => {
    const onLogOut = () => {};

    const me = { nickname: "duck", id: "littleduck1219" };

    return (
        <button className={style.logOutButton}>
            <div className={style.logOutUserImage} onClick={onLogOut}>
                <Image src='/littleduck-logo.png' width={40} height={40} alt='logout' />
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
};

export default LogOutButton;

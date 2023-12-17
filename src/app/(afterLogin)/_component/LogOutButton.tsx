"use client";

import React from "react";
import style from "./logOutButton.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogOut = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  if (!me?.user) {
    return null;
  }

  return (
    <button className={style.logOutButton} onClick={onLogOut}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image!} width={40} height={40} alt="logout" />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
};

export default LogOutButton;

"use client";

import React, { ChangeEventHandler, useState } from "react";
import style from "@/app/(beforeLogin)/_component/login.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    e.preventDefault();
    setMessage("");
    try {
      await signIn("credentials", {
        username: id,
        password: password,
        redirect: false,
      });
      router.replace("/home");
    } catch (error) {
      console.log(error);
      setMessage("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };

  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClickClose}>
            <AiOutlineClose size="26" />
          </button>
          <div>로그인하세요</div>
        </div>

        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className={style.input}
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={style.input}
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
            <div className={style.message}>{message}</div>
            <div className={style.modalFooter}>
              <button
                className={style.actionButton}
                disabled={!id && !password}
              >
                로그인하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

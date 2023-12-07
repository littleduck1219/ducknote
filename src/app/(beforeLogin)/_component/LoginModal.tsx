"use client";

import React, { useState } from "react";
import style from "@/app/(beforeLogin)/_component/login.module.css";
import { AiOutlineClose } from "react-icons/ai";

const LoginModal = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [message, setMassage] = useState();

    const onClickClose = () => {};

    const onSubmit = () => {};

    const onChangeId = () => {};

    const onChangePassword = () => {};

    return (
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <button className={style.closeButton} onClick={onClickClose}>
                        <AiOutlineClose size='26' />
                    </button>
                    <div>로그인하세요</div>
                </div>

                <form onSubmit={onSubmit}>
                    <div className={style.modalBody}>
                        <div className={style.inputDiv}>
                            <label className={style.inputLabel} htmlFor='id'>
                                아이디
                            </label>
                            <input
                                id='id'
                                className={style.input}
                                value={id}
                                onChange={onChangeId}
                                type='text'
                                placeholder=''
                            />
                        </div>
                        <div className={style.inputDiv}>
                            <label className={style.inputLabel} htmlFor='password'>
                                비밀번호
                            </label>
                            <input
                                id='password'
                                className={style.input}
                                value={password}
                                onChange={onChangePassword}
                                type='password'
                                placeholder=''
                            />
                        </div>
                        <div className={style.message}>{message}</div>
                        <div className={style.modalFooter}>
                            <button className={style.actionButton} disabled={!id && !password}>
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

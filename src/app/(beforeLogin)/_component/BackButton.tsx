"use client";

import style from "@/app/(beforeLogin)/_component/signup.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  return (
    <button className={style.closeButton} onClick={onClickClose}>
      <AiOutlineClose size="26" />
    </button>
  );
};

export default BackButton;

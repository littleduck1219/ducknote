import React from "react";
import style from "./message.module.css";
import "dayjs/locale/ko";
import Room from "@/app/(afterLogin)/messages/_component/room";

const Message = () => {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
};
export default Message;

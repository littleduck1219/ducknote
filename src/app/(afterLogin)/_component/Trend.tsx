import React from "react";
import style from "./trend.module.css";
import Link from "next/link";

const Trend = () => {
    return (
        <Link href={`/search?q=트렌드`} className={style.container}>
            <div className={style.count}>실시간트렌드</div>
            <div className={style.title}>littleduck</div>
            <div className={style.count}>1,234 posts</div>
        </Link>
    );
};

export default Trend;

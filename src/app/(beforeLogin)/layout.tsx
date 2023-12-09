import { LayoutProps } from "@/types/props";
import React from "react";
import styles from "@/app/(beforeLogin)/_component/mian.module.css";

const layout = ({ children, modal }: LayoutProps) => {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    );
};

export default layout;

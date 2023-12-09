import { LayoutProps } from "@/types/props";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: LayoutProps) => {
    return <div>홈레이아웃{children}</div>;
};

export default HomeLayout;

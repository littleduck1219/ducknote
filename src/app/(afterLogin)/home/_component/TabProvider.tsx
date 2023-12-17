"use client";

import { LayoutProps } from "@/types/props";
import React, { createContext, useState } from "react";

export const TabContext = createContext({ tab: "rec", setTab: (value: "rec" | "fol") => {} });

const TabProvider = ({ children }: LayoutProps) => {
    const [tab, setTab] = useState("rec");
    return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
};

export default TabProvider;

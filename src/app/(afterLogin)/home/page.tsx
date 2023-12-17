import React from "react";
import style from "./home.module.css";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import TabProvider from "./_component/TabProvider";
import Post from "../_component/Post";

const Home = () => {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Post />
                <Post />
                <Post />
                <Post />
            </TabProvider>
        </main>
    );
};

export default Home;

"use client"

import React from 'react';
import {PostProps} from "@/types/props";
import style from "./post.module.css"
import {useRouter} from "next/navigation";


const PostArticle = ({children, post}:PostProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.postId}`)
    }

    return (
        <article onClickCapture={onClick} className={style.post}>
            {children}
        </article>
    );
};

export default PostArticle;
import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";
import React from "react";

const Login = () => {
    return <LoginModal />;
};

export default Login;

// "use client"

// import { useRouter} from "next/navigation"

// const Login = () => {
//     const router = useRouter();
//     router.replace("i/flow/login");
//     return null;
// }

// router.push
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// intercept 할 경우 무한 루프에 빠질 수 있다.

// router.replace
// localhost:3000 -> localhost:3000/i/flow/login

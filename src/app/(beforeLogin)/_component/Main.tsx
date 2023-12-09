import Image from "next/image";
import styles from "./mian.module.css";
import Link from "next/link";

export default function Main() {
    return (
        <>
            <div className={styles.left}>
                <Image src='/littleduck2.png' alt='logo' width={800} height={800} />
            </div>
            <div className={styles.right}>
                <h1>지금 일어나고 있는 일</h1>
                <h2>지금 가입하세요</h2>
                <Link href='/i/flow/signup/' className={styles.signup}>
                    계정 만들기
                </Link>
                <h3>이미 가입하셨나요?</h3>
                <Link href='/i/flow/login/' className={styles.login}>
                    로그인
                </Link>
            </div>
        </>
    );
}

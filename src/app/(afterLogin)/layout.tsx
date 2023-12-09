import Link from "next/link";
import style from "./layout.module.css";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import NavMenu from "./_component/NavMenu";
import LogOutButton from "./_component/LogOutButton";
import TrandSection from "./_component/TrandSection";
import FollowRecommend from "./_component/FollowRecommend";

const AfterLoginLayout = ({ children }: any) => {
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href='/home'>
                            <div className={style.logoPill}>
                                <Image alt='logo' src='/littleduck-logo.png' width={50} height={50}></Image>
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link href='/compose/tweet' className={style.postButton}>
                                게시하기
                            </Link>
                        </nav>
                        <LogOutButton />
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>{children}</main>
                    <section className={style.rightSection}>
                        <div style={{ marginBottom: 60, width: "inherit" }}>
                            <form className={style.search}>
                                <IoIosSearch className={style.searchIcon} size='20' />
                                <input type='search' />
                            </form>
                        </div>
                        <TrandSection />
                        <div className={style.followRecommend}>
                            <h3>팔로우 추천</h3>
                            <FollowRecommend />
                            <FollowRecommend />
                            <FollowRecommend />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AfterLoginLayout;

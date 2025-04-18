"use client";
import styles from "../../../styles/not-found.module.css";
import BackButton from "../../../components/backButton";

export default function ErrorPage() {
    return(
    <div className={styles.notFound}>
        <h1 className={styles.title}>Sorry! <br/>Not Found page</h1>
        <BackButton/>
    </div>)
    ;

}
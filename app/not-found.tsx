import { Metadata } from "next";
import Link from "next/link";
import styles from "../styles/not-found.module.css"
 
export const metadata: Metadata = {
    title: "Not found",
};

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <h1 className={styles.title}>Sorry! <br/>Not Found page</h1>
            <Link href="/">Go to Home 🏠</Link>
        </div>
    );
}
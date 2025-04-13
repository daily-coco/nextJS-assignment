"use client";

import Link from "next/link";
import styles from "../styles/book.module.css";

interface IBooksProps{
    title:string;
    id:string;
}

export default function Book({id,title}:IBooksProps) {
    return (
        <div className={styles.movie}>
            <Link prefetch href={`/list?name=${id}`}>
                {title}
            </Link>
        </div>
    )
}
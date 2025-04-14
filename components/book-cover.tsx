import Image from 'next/image';
import Link from "next/link";
import styles from "../styles/book.module.css";
interface IBookCoverProps{
    title:string;
    cover:string;
    description:string;
    amazonProduct:string;
}

export default function BookCover({title,cover,description,amazonProduct}:IBookCoverProps) {
    return (
        <div className={styles.booksItem}>
            <div className={styles.cover}>
                {cover ? (
                        <img src={cover} alt={title} className={styles.coverImg}/>
                    ) : (
                        <Image  className={styles.noCover} src="/images/book/img_cover_coming_soon.svg" width={210} height={316} alt="Book cover Comming Soon..."/>
                    )
                }
            </div> 
            <h3 className={styles.bookTitle}>{title}</h3>
            <p className={styles.bookDesc}>{description}</p>
            <div className={styles.buttonWrap}>
            {amazonProduct ? (
                <Link className={styles.outLink} prefetch href={amazonProduct} target="_blank">Buy Now!</Link>
            ) : (
                <span className={styles.noData}>No Product Book!..:(</span>
            )}
            </div>
        </div>
    )
}
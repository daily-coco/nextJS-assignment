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
        <div className={styles.movie}>
            <h3>{title}</h3>
            {cover ? (<img src={cover} alt={title}/>) : 
                (<Image src="/images/book/img_cover_coming_soon.svg" width={302} height={454} alt="Book cover Comming Soon..."/>)
            }
            
            <p>{description}</p>
            {amazonProduct ? (
                <Link prefetch href={amazonProduct} target="_blank">Buy Now!</Link>
            ) : (
                <span>No Amazon Product Book!..:(</span>
            )}
        </div>
    )
}
import {API_BOOK_LIST} from "../../lib/constants"
import Book from "../../components/book";
import styles from "../../styles/home.module.css";

export const metadata = {
    title : "Home",
    description:"The New York Times Best Sellers Home",
};

export async function getBookList() {
    const response = await fetch(API_BOOK_LIST);
    const json= await response.json();
    // console.log(json.results);
    return json.results;
}

export default async function HomePage(){
    const books = await getBookList();
    return(
        <>
            <h1 className={styles.title}>The New York Times Best Sellers</h1>
            <div className={styles.container}>
                {books.map((item) =>(
                    <Book key={item.list_name_encoded} title={item.display_name} id={item.list_name_encoded} />
                ))}
            </div>
        </>
    )
}
import {API_BOOK_LIST} from "../../lib/constants"
import Book from "../../components/book";
import styles from "../../styles/home.module.css";

export const metadata = {
    title : "Home",
};

async function getBookList() {
    const response = await fetch(API_BOOK_LIST);
    const json= await response.json();
    return json.results;
}

export default async function HomePage(){
    const books = await getBookList();
    return(
        <div className={styles.container}>
            {books.map((item) =>(
                <Book key={item.list_name_encoded} title={item.display_name} id={item.list_name_encoded} />
            ))}
        </div>
    )
}
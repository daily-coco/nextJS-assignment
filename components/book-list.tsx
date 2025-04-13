
import { API_HARDCOVER_FICTION } from "../lib/constants";
import styles from "../styles/book-list.module.css"

export async function getBooksDetail(name:string) {
  const response = await fetch(`${API_HARDCOVER_FICTION}${name}`);
  const json= await response.json();
  console.log(json.results);
  return json.results;
}

export default async function BookList({name}:{name:string}) {
  const books = await getBooksDetail(name);
    return (
     <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>{books.list_name}</h1>
      </div>
    </div>
    );
}
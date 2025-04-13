import {API_HARDCOVER_FICTION} from "../../../lib/constants"
import styles from "../../../styles/book-list.module.css"

interface SearchParams {
  name?: string;
}

export async function getBooks(id:string) {
  const response = await fetch(`${API_HARDCOVER_FICTION}/${id}`);
  const json= await response.json();
  return json.results;
}

export default async function BookInfo({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
    const id = searchParams.name; 
    const books = await getBooks(id);
    return (
     <div className={styles.container}>
      {books.display_name}
    </div>
    );
}
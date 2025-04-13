import { Suspense } from "react";
import BookCover from "../../../components/book-cover";
import {API_HARDCOVER_FICTION} from "../../../lib/constants"
import styles from "../../../styles/book-list.module.css"

interface SearchParams {
  name?: string;
}
async function getBookCategory(id:string) {
  const response = await fetch(`${API_HARDCOVER_FICTION}/${id}`);
  const json= await response.json();
  // console.log(json.results);
  return json.results;
} 


type Params = Promise<{ id: string }>;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }) {
  const id = searchParams.name;
  const res = await fetch(`${API_HARDCOVER_FICTION}/${id}`);
  const json = await res.json();
  const category = json.results;

  return {
    title : category.display_name,
  }
}


export default async function BookInfo({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
    const id = searchParams.name; 
    const booksCategory = await getBookCategory(id);
    return (
      <>
        <h1>{booksCategory.display_name}</h1>
        <div className={styles.container}>
          
        <Suspense fallback={<h1>Loading!</h1>}> 
          {booksCategory.books.map((book, index) =>(
            <BookCover 
                key={`${book.title}-${index}`} 
                title={book.title}
                cover={book.book_image}
                amazonProduct={book.amazon_product_url}
                description={book.description}
            />
          ))  
          }
        </Suspense>
        
        </div>
      </>
    );
}
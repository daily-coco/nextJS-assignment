import { Suspense } from "react";
import BookCover from "../../../components/book-cover";
import {API_HARDCOVER_FICTION} from "../../../lib/constants"
import styles from "../../../styles/book-list.module.css"
import BackButton from "../../../components/backButton";

type SearchParams = Promise<{ name?: string }>;

async function getBookCategory(id:string) {
  const response = await fetch(`${API_HARDCOVER_FICTION}/${id}`);
  const json= await response.json();
  return json.results;
} 


export async function generateMetadata({ searchParams }: { searchParams: SearchParams}) {
  
  const { name:id } = await searchParams;
  const res = await fetch(`${API_HARDCOVER_FICTION}/${id}`);
  const json = await res.json();
  const category = json.results;

  return {
    title: id ? `${category.display_name}` : "Books Category Detail",
  }
}


export default async function BookInfo({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { name:id } = await searchParams;
  if(!id) {
    return (<div className={styles.nodata}>
        <h1 className={styles.nodataTitle}>Sorry!</h1>
        <p className={styles.nodatDesc}>
        I think the information currently registered in the book is incorrect!<br/>
        Please leave an inquiry to the administrator and we will take quick action!
        </p>
        <BackButton/>
      </div>);
  }
    const booksCategory = await getBookCategory(id);
    return (
      <>
        <h1 className={styles.categoryTitle}>{booksCategory.display_name}</h1>
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
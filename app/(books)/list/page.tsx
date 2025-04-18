import { Suspense } from "react";
import BookCover from "../../../components/book-cover";
import {API_HARDCOVER_FICTION} from "../../../lib/constants"
import styles from "../../../styles/book-list.module.css"

type SearchParams = Promise<{ list_name_encoded?: string }>;
// interface SearchParams {
//   name?: string;
// }
async function getBookCategory(id:string) {
  const response = await fetch(`${API_HARDCOVER_FICTION}/${id}`);
  const json= await response.json();
  // console.log(json.results);
  return json.results;
} 


export async function generateMetadata({ searchParams }: { searchParams: SearchParams}) {
  
  const { list_name_encoded:id } = await searchParams;
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
    // const id = searchParams.name; 
  const { name:id } = await searchParams;
  if(!id) {
    return <div>현재 책에 등록된 정보가 올바르지 않은 것 같아요! 관리자에게 문의를 남겨주시면 빠르게 조취해드릴께요!</div>
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
import {deleteBookText} from "../../constants/copyright";
import Link from "next/link"

export default function BooksList({books, onDeleteBook}) {
    return (
        <ul>
            {books.map(book => {
                return (
                    <div key={book.id}>
                        <li><Link href={`/book/${book.id}`}><a>{book.title}</a></Link></li>
                        <button onClick={() => onDeleteBook(book.id)}>{deleteBookText}</button>
                    </div>
                )
            })}
        </ul>
    )
}
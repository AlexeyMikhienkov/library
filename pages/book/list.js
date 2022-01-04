import {del} from "../../utils/requests";
import BooksList from "../../components/books-list/books-list";
import {useState} from "react";

const Books = ({books: serverBooks}) => {
    const [books, setBooks] = useState(serverBooks);

    function onDeleteBook(bookId) {
        del(`/book/${bookId}`, {
            id: bookId
        })
            .then(res => setBooks(books.filter(book => book.id !== bookId)))
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })
    }

    return (
        <BooksList books={books} onDeleteBook={onDeleteBook} />
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:8080/book/list");
    const books = await res.json();

    return {
        props: {
            books
        }
    }
}

export default Books
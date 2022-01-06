import BooksList from "../../components/books/booksList";
import {useState} from "react";
import {del, get, getWithParams} from "../../utils/requests";
import {sortBy} from "../../constants/constants";
import Wrapper from "../../components/wrapper/wrapper";

export default function Show({books: serverBooks}) {
    const [books, setBooks] = useState(serverBooks);

    function deleteBook(bookId) {
        del(`/book/${bookId}`, {
            id: bookId
        })
            .then(res => setBooks(books.filter(book => book.id !== bookId)))
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })

    }

    function onSearch(sortParam) {
        const params = {
            sortBy: sortBy[sortParam]
        }

        getWithParams('/search/books', params)
            .then(res => setBooks(res.data))
            .catch(({response}) => {
                console.log(response)
                if (response.status === 400) {
                    const {errors} = response.data;

                    if (errors.length) {
                        errors.map(error => console.log(error.defaultMessage))
                    }
                } else if (response.status === 500) {
                    console.log(response.message)
                } else console.log("ИНАЯ ОШИБКА")
            })
    }

    return (
        <Wrapper>
            <BooksList books={books} onSearch={onSearch} onDeleteBook={deleteBook}/>
        </Wrapper>
    )
}

export async function getStaticProps() {
    const res = await get('/book/list');
    const books = await res.data;

    return {
        props: {
            books
        }
    }
}
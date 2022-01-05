import Books from "../../components/books/books";
import {useState} from "react";
import {getWithParams} from "../../utils/requests";
import {sortBy} from "../../constants/constants";

export default function Show({books: serverBooks}) {
    const [books, setBooks] = useState(serverBooks);

    function deleteBook() {
        console.log("Удалить книгу!")
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
        <Books books={books} onSearch={onSearch} onDeleteBook={deleteBook} />
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
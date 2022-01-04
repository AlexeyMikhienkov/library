import {useEffect, useState} from "react";

const List = ({books}) => {
    //TODO: books только в первый раз, далее через get-запрос
    console.log(books);

    useEffect(async () => {
        const res = await fetch("http://localhost:8080/book/list");
        const data = await res.json();

        console.log(data);
    }, [])

//    const [books, setBooks] = useState(serverBooks);

/*

*/

    return (
        <ul>
            {books.map(book => {
                return <li key={book.id}>{book.title}</li>
            })}
        </ul>
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

export default List
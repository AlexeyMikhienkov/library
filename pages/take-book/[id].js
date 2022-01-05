import {useEffect, useState} from "react";
import BooksInStock from "../../components/books-in-stock/books-in-stock";
import {useRouter} from "next/router";
import {getWithParams, post} from "../../utils/requests";

export default function TakeBook({allBooks}) {
    const [booksInStock, setBooksInStock] = useState([]);

    //TODO: отобразить результат не в консоли
    const router = useRouter();

    useEffect(() => {
        const inStock = allBooks.filter(book => book.count > 0)
        setBooksInStock(inStock);
    }, allBooks)

    function takeBook(bookId) {
        const userId = Number(router.query.id);

        const params = {
            userId,
            bookId
        }

        post('/user/book-up', params)
            .then(res => console.log(res))
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
        <BooksInStock booksInStock={booksInStock} onTakeBook={takeBook}/>
    )
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:8080/user/list");
    const users = await res.json();

    const paths = users.map((user) => ({
        params: {id: user.id.toString()},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps() {
    const params = {
        sortBy: "NONE"
    }

    const res = await getWithParams('/search/books', params);
    const allBooks = res.data;

    return {
        props: {
            allBooks
        }
    }
}
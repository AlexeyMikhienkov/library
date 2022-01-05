import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import RevertBooksList from "../../components/revert-books-list/revert-books-list";
import {get, post} from "../../utils/requests";

export default function RevertBook({allTakenBooks}) {
    const [userTakenBooks, setUserTakenBooks] = useState(allTakenBooks);

    const router = useRouter();

    useEffect(() => {
        const userTaken = allTakenBooks.filter(taken => taken.user.id === router.query.id);
        setUserTakenBooks(userTaken);
    }, allTakenBooks)

    function revertBook(bookId) {
        const userId = Number(router.query.id);

        const params = {
            userId,
            bookId
        }

        //TODO: обработать наличие штрафа в then
        post('/user/book-revert', params)
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
        <RevertBooksList userTakenBooks={userTakenBooks} onRevertBook={revertBook} />
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
    const res = await get('/search/taken-books');
    const allTakenBooks = res.data;

    return {
        props: {
            allTakenBooks
        }
    }
}
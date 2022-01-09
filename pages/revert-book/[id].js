import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import RevertBooks from "../../components/revert-books/revert-books";
import {get, postWithParams} from "../../utils/requests";
import Wrapper from "../../components/wrapper/wrapper";

export default function RevertBook({allTakenBooks}) {
    const [userTakenBooks, setUserTakenBooks] = useState([]);
    const [takenBooks, setTakenBooks] = useState(allTakenBooks);
    const [fine, setFine] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const userId = Number(router.query.id)

        const userTaken = takenBooks.filter(taken => taken.user.id === userId);
        setUserTakenBooks(userTaken);
    }, [takenBooks])

    function revertBook(bookId) {
        const userId = Number(router.query.id);

        const params = {
            userId,
            bookId
        }

        postWithParams('/user/book-revert', params)
            .then(async (res) => {
                const response = await get('/search/taken-books')
                const data = response.data;

                setTakenBooks(data);
                setFine(res.data.fine);
            })
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
            <RevertBooks userTakenBooks={userTakenBooks} onRevertBook={revertBook}
                             className={"wrapper__revert-books"} fine={fine} />
        </Wrapper>
    )
}

export async function getStaticPaths() {
    const res = await get("/user/list");
    const users = res.data;

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
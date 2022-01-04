import SelectBooks from "../../components/select-books/select-books";
import {useRouter} from "next/router";
import {getWithParams} from "../../utils/requests";
import {useState} from "react";

export default function SearchBooks({genres, writers}) {
    const router = useRouter();

    const [books, setBooks] = useState([]);

    async function onSearch(type, param) {
        const userId = Number(router.query.id);

        const params = {
            userId,
            sortBy: "NONE"
        }

        if (type === "genre")
            params.genre = param
        else
            params.writer = param

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
        <SelectBooks genres={genres} writers={writers} onSearch={onSearch} books={books}/>
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

export async function getStaticProps({params}) {
    const res = await fetch("http://localhost:8080/search/genres");
    const genres = await res.json();

    const res2 = await fetch("http://localhost:8080/search/writers");
    const writers = await res2.json();

    return {
        props: {
            genres,
            writers
        }
    }
}
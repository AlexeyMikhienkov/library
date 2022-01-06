import SelectBooks from "../../components/select-books/select-books";
import {useRouter} from "next/router";
import {getWithParams, get} from "../../utils/requests";
import {useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";

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
        <Wrapper>
            <SelectBooks genres={genres} writers={writers} onSearch={onSearch} books={books} className={"wrapper__select-books"}/>
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

export async function getStaticProps({params}) {
    const res = await get("/search/genres");
    const genres = res.data;

    const res2 = await get("/search/writers");
    const writers = res2.data;

    return {
        props: {
            genres,
            writers
        }
    }
}
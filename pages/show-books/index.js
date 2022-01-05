import ShowBooks from "../../components/show-books/show-books";
import {useState} from "react";
import {getWithParams} from "../../utils/requests";
import {sortBy} from "../../constants/constants";

export default function Show() {
    const [books, setBooks] = useState([]);

    async function onSearch(sortParam) {
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
        <ShowBooks books={books} onSearch={onSearch} />
    )
}
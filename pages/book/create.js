import CreateBook from "../../components/create-book/create-book";
import {post} from "../../utils/requests";
import Wrapper from "../../components/wrapper/wrapper";

export default function createBookPage() {
    //TODO: выводить исключение не в консоль
    function createQuery(writer, title, genre, ageLimit, count) {
        const data = {
            writer,
            title,
            genre,
            ageLimit,
            count
        }

        post('/book/create', data)
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
        <Wrapper>
            <CreateBook onCreateQuery={createQuery}/>
        </Wrapper>
    )
}
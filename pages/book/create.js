import CreateBook from "../../components/create-book/create-book";
import {post} from "../../utils/requests";
import Wrapper from "../../components/wrapper/wrapper";
import {useState} from "react";

export default function createBookPage() {
    const [errors, setErrors] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false);

    function createBook(writer, title, genre, ageLimit, count) {
        const data = {
            writer,
            title,
            genre,
            ageLimit,
            count
        }

        post('/book/create', data)
            .then(res => {
                setErrors({});
                setButtonClicked(true);
            })
            .catch(({response}) => {
                if (response.status === 400) {
                    const {errors: responseErrors} = response.data;

                    const errors = [];

                    responseErrors.map(error => {
                        errors.push({
                            field: error.field,
                            message: error.defaultMessage
                        })
                    })

                    setErrors(errors);
                    setButtonClicked(true);
                } else if (response.status === 500) {
                    setErrors({
                        field: "default",
                        message: response.message
                    });

                    setButtonClicked(true);
                } else console.log("ИНАЯ ОШИБКА")
            })
    }

    return (
        <Wrapper>
            <CreateBook onCreateBook={createBook} errors={errors} clicked={buttonClicked} className={"wrapper__create-book"}/>
        </Wrapper>
    )
}
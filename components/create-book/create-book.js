import {useState} from "react";
import {
    addBookButtonText,
    addBookHeader,
    bookCreatedSuccessful,
    typeData
} from "../../constants/copyright";
import {bookFormFields, genres} from "../../constants/constants";
import Header from "../header/header";

export default function CreateBook({onCreateBook, className, errors, clicked}) {
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState(Object.keys(genres)[0]);
    const [ageLimit, setAgeLimit] = useState('');
    const [count, setCount] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onCreateBook(writer, title, genre, ageLimit, count);
    }

    function titleToStateConverter(propTitle) {
        switch (propTitle.toString()) {
            case "writer":
                return writer;
            case "title":
                return title;
            case "genre":
                return genre;
            case "ageLimit":
                return ageLimit;
            case "count":
                return count;
            default:
                return;
        }
    }

    function titleToSetterConverter(propTitle) {
        switch (propTitle.toString()) {
            case "writer":
                return setWriter;
            case "title":
                return setTitle;
            case "genre":
                return setGenre;
            case "ageLimit":
                return setAgeLimit;
            case "count":
                return setCount;
            default:
                return;
        }
    }

    return (
        <>
            <Header headerTitle={addBookHeader}/>
            <div className={`${className} create-book`}>
                <h3 className={"create-book__text"}>{typeData}</h3>
                <form className={"create-book__form form"} onSubmit={handleSubmit}>
                    {bookFormFields.map(fieldObj => {
                        const {title, text} = fieldObj;

                        let errorObj;

                        if (Object.keys(errors).length)
                            errorObj = errors?.find(error => error.field === title)

                        return (
                            <div className={"form__field"} key={title}>
                                <label className={"form__label"} htmlFor={title}>{text}</label><br/>
                                {
                                    title === "genre" ?
                                        <select className={"form__select"} value={titleToStateConverter(title)}
                                                onChange={event => {
                                                    const func = titleToSetterConverter(title);
                                                    if (typeof func === "function")
                                                        func(event.target.value)
                                                }}>
                                            {
                                                Object.entries(genres).map(([key, value]) => {
                                                    return <option key={key} value={key}>{value}</option>
                                                })
                                            }
                                        </select> :
                                        <input className={"form__input"} type={"text"} id={title}
                                               value={titleToStateConverter(title)}
                                               onChange={event => {
                                                   titleToSetterConverter(title)(event.target.value)
                                               }}/>
                                }
                                <br/>
                                <p className={"form__error-message"}>{errorObj?.message}</p>
                            </div>
                        )
                    })}

                    <div className={"form__footer"}>
                        <button className={"form__button"} type={"submit"}>{addBookButtonText}</button>
                        {
                            !Object.keys(errors).length && clicked ?
                                <p className={"form__success-message"}>{bookCreatedSuccessful}</p> : null
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

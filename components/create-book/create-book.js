import {useState} from "react";
import {addBookButtonText, addBookHeader, typeData} from "../../constants/copyright";
import {bookFormFields, genres} from "../../constants/constants";
import Header from "../header/header";

export default function CreateBook({onCreateBook, className}) {
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
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

                        if (title === "genre")
                            return (
                                <div key={title}>
                                    <label className={"form__label"} htmlFor={title}>{text}</label><br/>
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
                                    </select><br/>
                                </div>
                            )

                        return (
                            <div key={title}>
                                <label className={"form__label"} htmlFor={title}>{text}</label><br/>
                                <input className={"form__input"} type={"text"} id={title}
                                       value={titleToStateConverter(title)}
                                       onChange={event => {
                                           titleToSetterConverter(title)(event.target.value)
                                       }}/><br/>
                            </div>
                        )
                    })}

                    <button className={"form__button"} type={"submit"}>{addBookButtonText}</button>
                </form>
            </div>
        </>
    )
}

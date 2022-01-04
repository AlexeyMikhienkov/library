import {useState} from "react";
import {addBookButtonText, addBookHeader} from "../../constants/copyright";
import {genres, bookData} from "../../constants/constants";

export default function CreateBook({onCreateQuery}) {
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [ageLimit, setAgeLimit] = useState('');
    const [count, setCount] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onCreateQuery(writer, title, genre, ageLimit, count);
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
        <div className={"add-book"}>
            <h3 className={"add-book__header"}>{addBookHeader}</h3>
            <form onSubmit={handleSubmit}>
                {Object.entries(bookData).map(([title, text]) => {
                    if (title === "id")
                        return null

                    if (title === "genre")
                        return (
                            <div key={title}>
                                <label htmlFor={title}>{text}</label><br/>
                                <select value={titleToStateConverter(title)} onChange={event => {
                                    titleToSetterConverter(title)(event.target.value)
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
                            <label htmlFor={title}>{text}</label><br/>
                            <input type={"text"} id={title} value={titleToStateConverter(title)}
                                   onChange={event => {
                                       titleToSetterConverter(title)(event.target.value)
                                   }}/><br/>
                        </div>
                    )
                })}

                <button type={"submit"}>{addBookButtonText}</button>
            </form>
        </div>
    )
}

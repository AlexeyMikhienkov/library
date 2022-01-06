import {booksTitle, deleteBookText, search} from "../../constants/copyright";
import {orderBy, orderParams} from "../../constants/constants";
import {useState} from "react";
import {useRouter} from "next/router";
import Header from "../header/header";
import BooksTable from "../books-table/books-table";

export default function BooksList({books, onSearch, onDeleteBook, className}) {
    const {title, text} = orderBy;

    const [orderParam, setOrderParam] = useState(Object.keys(orderParams)[0]);

    function handleSubmit(event) {
        event.preventDefault();
        onSearch(orderParam)
    }

    return (
        <>
            <Header headerTitle={booksTitle}/>
            <div className={`${className} books-list`}>
                <div className={"books-list__form-container"}>
                    <form className={"books-list__form form"} onSubmit={handleSubmit}>
                        <label className={"form__label"} htmlFor={title}>{text}</label>
                        <select className={"form__select"} value={orderParam} onChange={event => setOrderParam(event.target.value)}>
                            {
                                Object.entries(orderParams).map(([title, type]) => {
                                    return <option key={title} value={title}>{type}</option>
                                })
                            }
                        </select>
                        <button className={"form__button"} type={"submit"}>{search}</button>
                    </form>
                </div>

                <BooksTable books={books} className={"books-list"} bookAction={onDeleteBook} actionText={deleteBookText} />
            </div>
        </>
    )
}

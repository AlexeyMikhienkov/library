import {noBooksFound, search, showBooks} from "../../constants/copyright";
import {orderBy, orderParams} from "../../constants/constants";
import {useState} from "react";

export default function ShowBooks({books, onSearch}) {
    const {title, text} = orderBy;

    const [orderParam, setOrderParam] = useState(Object.keys(orderParams)[0]);

    function handleSubmit(event) {
        event.preventDefault();
        onSearch(orderParam)
    }

    return (
        <div className={"show-books"}>
            <h3 className={"show-books__header"}>{showBooks}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor={title}>{text}</label>
                <select value={orderParam} onChange={event => setOrderParam(event.target.value)}>
                    {
                        Object.entries(orderParams).map(([title, type]) => {
                            return <option key={title} value={title}>{type}</option>
                        })
                    }
                </select>
                <button type={"submit"}>{search}</button>
            </form>

            <div className={"show-books__result"}>
                {books.length ?
                    books.map(book => {
                        return (
                            <div key={book.id}>
                                <p>{book.title + book.writer}</p>
                            </div>
                        )
                    }) :
                    <p>{noBooksFound}</p>}
            </div>
        </div>
    )
}

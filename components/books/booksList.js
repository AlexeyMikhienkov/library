import {
    booksTitle,
    deleteBookText,
    search,
    showBooks,
} from "../../constants/copyright";
import {orderBy, orderParams} from "../../constants/constants";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Header from "../header/header";

export default function BooksList({books, onSearch, onDeleteBook}) {
    const {title, text} = orderBy;
    const router = useRouter();

    const [orderParam, setOrderParam] = useState(Object.keys(orderParams)[0]);

    function handleSubmit(event) {
        event.preventDefault();
        onSearch(orderParam)
    }

    return (
        <>
            <Header headerTitle={booksTitle}/>
            <div className={"books"}>
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

                <div className={"books__result"}>
                    {
                        <ul>
                            {books.map(book => {
                                return (
                                    <div key={book.id}>
                                        <li><Link href={`/book/${book.id}`}><a>{book.title}</a></Link></li>
                                        <button onClick={() => onDeleteBook(book.id)}>{deleteBookText}</button>
                                    </div>
                                )
                            })}
                        </ul>
                    }
                </div>
            </div>
        </>
    )
}

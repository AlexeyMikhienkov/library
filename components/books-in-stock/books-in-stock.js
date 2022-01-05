import {booksInStockHeader, chooseBookText, goBack} from "../../constants/copyright";
import {useRouter} from "next/router";

export default function BooksInStock({booksInStock, onTakeBook}) {
    const router = useRouter();

    return (
        <div className={"books-in-stock"}>
            <h3 className={"books-in-stock__header"}>{booksInStockHeader}</h3>
            <ul className={"books-in-stock__list"}>
                {booksInStock.map(book => {
                    return (
                        <div key={book.id}>
                            <li className={"books-in-stock__item"}>{book.title}</li>
                            <button onClick={() => onTakeBook(book.id)}>{chooseBookText}</button>
                        </div>
                        )
                })}
            </ul>
            <button onClick={() => router.back()}>{goBack}</button>
        </div>
    )
}
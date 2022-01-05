import {booksInStockHeader, chooseBookText} from "../../constants/copyright";
import {useRouter} from "next/router";
import Header from "../header/header";
import Wrapper from "../wrapper/wrapper";

export default function BooksInStock({booksInStock, onTakeBook}) {
    const router = useRouter();

    return (
        <Wrapper>
            <Header headerTitle={booksInStockHeader} />
            <div className={"books-in-stock"}>
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
            </div>
        </Wrapper>
    )
}
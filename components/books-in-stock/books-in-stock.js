import {
    booksInStockHeader,
    chooseBookText,
    noBooksFound,
    noBooksInLibrary,
    takeBookText
} from "../../constants/copyright";
import Header from "../header/header";
import BooksTable from "../books-table/books-table";

export default function BooksInStock({booksInStock, onTakeBook}) {
    return (
        <>
            <Header headerTitle={booksInStockHeader}/>
            <div className={"books-in-stock"}>
                {booksInStock.length ?
                    <BooksTable books={booksInStock} bookAction={onTakeBook} className={"books-in-stock"} actionText={takeBookText}/> :
                    <p className={"books-in-stock__no-books"}>{noBooksInLibrary}</p>
                }
            </div>
        </>
    )
}
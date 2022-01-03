import Book from "../../components/book/book";
import {books} from "../../constants/constants";

export default function BookPage() {
    return <Book book={books[0]}/>
}
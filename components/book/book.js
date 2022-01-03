import {bookData, bookHeader} from "../../constants/copyright";

export default function Book({book}) {
    const {authorLastname, authorName, authorPatronymic, title, bookId, genre, readerAge, copies} = book;

    return (
        <div className={"book"}>
            <h3 className={"book__header"}>{bookHeader}</h3>
            <div className={"book__info"}>
                <p className={"book__author"}>
                    {`${bookData.author} ${authorLastname} ${authorName} ${authorPatronymic}`}
                </p>
                <p className={"book__title"}>
                    {`${bookData.title} ${title}`}
                </p>
                <p className={"book__id"}>
                    {`${bookData.bookId} ${bookId}`}
                </p>
                <p className={"book__genre"}>
                    {`${bookData.genre} ${genre}`}
                </p>
                <p className={"book__reader-age"}>
                    {`${bookData.readerAge} ${readerAge}`}
                </p>
                <p className={"book__copies"}>
                    {`${bookData.copies} ${copies}`}
                </p>
            </div>
        </div>
    )
}
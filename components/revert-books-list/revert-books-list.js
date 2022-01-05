import {noTakenBooksFound, revert, revertBooksListHeader} from "../../constants/copyright";

export default function RevertBooksList({userTakenBooks, onRevertBook}) {
    return (
        <div className={"revert-books-list"}>
            <h3 className={"revert-books-list__header"}>{revertBooksListHeader}</h3>
            <ul className={"revert-books-list__list"}>
                {userTakenBooks.length ?
                    userTakenBooks.map(book => {
                        return (
                            <div key={book.id}>
                                <li className={"revert-books-list__item"}>{book.title}</li>
                                <button onClick={() => onRevertBook(book.id)}>{revert}</button>
                            </div>
                        )
                    }) :
                    <p>{noTakenBooksFound}</p>
                }
            </ul>

        </div>
    )
}
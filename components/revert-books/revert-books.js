import {
    noTakenBooksFound,
    revertBooksListHeader,
} from "../../constants/copyright";
import Header from "../header/header";
import RevertBooksTableHead from "./revert-books-table-head";
import RevertBooksTableBody from "./revert-books-table-body";

export default function RevertBooks({userTakenBooks, onRevertBook, className}) {
    return (
        <>
            <Header headerTitle={revertBooksListHeader}/>
            <div className={`${className} revert-books`}>
                {userTakenBooks.length ?
                    <table className={`${className}__table table`}>
                        <RevertBooksTableHead/>
                        <RevertBooksTableBody userTakenBooks={userTakenBooks} onRevertBook={onRevertBook}/>
                    </table> :
                    <p className={"revert-books__no-books"}>{noTakenBooksFound}</p>
                }
            </div>
        </>
    )
}
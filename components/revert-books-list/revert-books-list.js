import {noTakenBooksFound, revert, revertBooksListHeader} from "../../constants/copyright";
import {useRouter} from "next/router";
import Header from "../header/header";
import Wrapper from "../wrapper/wrapper";

export default function RevertBooksList({userTakenBooks, onRevertBook}) {
    const router = useRouter();

    return (
        <Wrapper>
            <Header headerTitle={revertBooksListHeader} />
            <div className={"revert-books-list"}>
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
        </Wrapper>
    )
}
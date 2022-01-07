import {fineSum, revert} from "../../constants/copyright";
import moment from 'moment';

export default function RevertBooksTableBody({userTakenBooks, onRevertBook, fine}) {
    return (
        <tbody>
        {
            userTakenBooks.map((taken, index) => {
                let {book, bookUpTime, revertTime} = taken;

                const formatBookUpTime = moment(bookUpTime).format('YYYY-MM-DD');
                const formatRevertTime = moment(revertTime).format('YYYY-MM-DD');

                const isOverdue = Date.now() > new Date(formatRevertTime).getTime()

                return (
                    <>
                    <tr className={`table__row ${!(index % 2) ? "table__row_even" : ""}`}>
                        <>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{book.writer}</p>
                            </td>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{book.title}</p>
                            </td>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{formatBookUpTime}</p>
                            </td>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{formatRevertTime}</p>
                            </td>
                            {
                                onRevertBook ?
                                    <td className={"table__cell"}>
                                        <button
                                            className={`table__button ${isOverdue ? "table__button_overdue" : ""}`}
                                            onClick={() => onRevertBook(book.id)}>{revert}</button>
                                    </td> :
                                    null
                            }
                        </>
                    </tr>
                    {
                        isOverdue ?
                            <tr className={'table__row table__row_overdue'}>
                                <td className={"table__cell"} colSpan={5}>
                                    <p className={"table__fine-text"}>{`${fineSum} ${fine}`}</p>
                                </td>
                            </tr>
                            : null
                    }
                    </>
                )
            })
        }
        </tbody>
    )
}

{/*                <ul className={"revert-books-list__list"}>
                    {userTakenBooks.length ?
                        userTakenBooks.map(taken => {
                            const {book} = taken;

                            return (
                                <div key={book.bookUpTime}>
                                    <li className={"revert-books-list__item"}>{book.title}</li>
                                    <button onClick={() => onRevertBook(book.id)}>{revert}</button>
                                </div>
                            )
                        }) :
                        <p>{noTakenBooksFound}</p>
                    }
                </ul>*/
}
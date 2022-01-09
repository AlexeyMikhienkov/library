import {revert} from "../../constants/copyright";
import moment from 'moment';

export default function RevertBooksTableBody({userTakenBooks, onRevertBook}) {
    return (
        <tbody>
        {
            userTakenBooks.map((taken, index) => {
                let {book, bookUpTime, revertTime} = taken;

                const formatBookUpTime = moment(bookUpTime).format('YYYY-MM-DD');
                const formatRevertTime = moment(revertTime).format('YYYY-MM-DD');

                const isOverdue = Date.now() > new Date(formatRevertTime).getTime()

                return (
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
                )
            })
        }
        </tbody>
    )
}
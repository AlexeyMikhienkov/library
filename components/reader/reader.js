import {readerData, readerHeader, readerWithoutBooksNow} from "../../constants/copyright";
import convertBirthdayToAge from "../../utils/convertBirthdayToAge";

export default function Reader({reader}) {
    const {firstName, lastName, thirdName, birthday, books} = reader;

    return (
        <div className={"reader"}>
            <h3>{readerHeader}</h3>
            <div className={"reader__info"}>
                <p className={"reader__lastname"}>
                    {`${readerData.lastName} ${lastName}`}
                </p>
                <p className={"reader__firstname"}>
                    {`${readerData.firstName} ${firstName}`}
                </p>
                <p className={"reader__thirdname"}>
                    {`${readerData.thirdName} ${thirdName}`}
                </p>
                <p className={"reader__age"}>
                    {`${readerData.age} ${convertBirthdayToAge(birthday)}`}
                </p>
                <div className={"reader__books"}>
                    <>
                        <h3>{readerData.books}</h3>
                        {books.length ?
                            <table>
                                <tbody>
                                {
                                    books.map(book => {
                                        return (
                                            <tr key={book.id}>
                                                <td>{book.writer}</td>
                                                <td>{book.title}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table> :
                            <p>{readerWithoutBooksNow}</p>
                        }
                    </>
                </div>
            </div>
        </div>
    )
}
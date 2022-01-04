import {userData, userHeader, userWithoutBooksNow} from "../../constants/copyright";
import convertBirthdayToAge from "../../utils/convertBirthdayToAge";

export default function User({user}) {
    const {firstName, lastName, thirdName, birthday, books} = user;

    return (
        <div className={"user"}>
            <h3>{userHeader}</h3>
            <div className={"user__info"}>
                <p className={"user__lastname"}>
                    {`${userData.lastName} ${lastName}`}
                </p>
                <p className={"user__firstname"}>
                    {`${userData.firstName} ${firstName}`}
                </p>
                <p className={"user__thirdname"}>
                    {`${userData.thirdName} ${thirdName}`}
                </p>
                <p className={"user__age"}>
                    {`${userData.age} ${convertBirthdayToAge(birthday)}`}
                </p>
                <div className={"user__books"}>
                    <>
                        <h3>{userData.books}</h3>
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
                            <p>{userWithoutBooksNow}</p>
                        }
                    </>
                </div>
            </div>
        </div>
    )
}
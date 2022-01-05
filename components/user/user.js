import {userHeader, userWithoutBooksNow} from "../../constants/copyright";
import convertBirthdayToAge from "../../utils/convertBirthdayToAge";
import {userData} from "../../constants/constants";
import Wrapper from "../wrapper/wrapper";
import Header from "../header/header";

export default function User({user}) {
    const {firstName, lastName, thirdName, birthday, books} = user;

    return (
        <Wrapper>
            <Header headerTitle={userHeader} />
            <div className={"user"}>
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
        </Wrapper>
    )
}
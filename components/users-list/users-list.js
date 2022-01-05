import {
    deleteUserText,
    revertBookText,
    selectBooksHeader,
    takeBookText,
    usersTitle
} from "../../constants/copyright";
import Link from "next/link"
import {useRouter} from "next/router";
import Header from "../header/header";

export default function UsersList({users, onDeleteUser, onSelectBooks, onTakeBook, onRevertBook}) {
    const router = useRouter();

    return (
        <>
            <Header headerTitle={usersTitle}/>
            <div>
                <ul>
                    {users.map(user => {
                        return (
                            <div key={user.id}>
                                <li><Link href={`/user/${user.id}`}><a>{user.lastName + user.firstName}</a></Link></li>
                                <button onClick={() => onSelectBooks(user.id)}>{selectBooksHeader}</button>
                                <button onClick={() => onDeleteUser(user.id)}>{deleteUserText}</button>
                                <button onClick={() => onTakeBook(user.id)}>{takeBookText}</button>
                                <button onClick={() => onRevertBook(user.id)}>{revertBookText}</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
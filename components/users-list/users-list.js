import {deleteUserText, selectBooksHeader} from "../../constants/copyright";
import Link from "next/link"

export default function UsersList({users, onDeleteUser, onSelectBooks}) {
    return (
        <ul>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <li><Link href={`/user/${user.id}`}><a>{user.lastName + user.firstName}</a></Link></li>
                        <button onClick={() => onSelectBooks(user.id)}>{selectBooksHeader}</button>
                        <button onClick={() => onDeleteUser(user.id)}>{deleteUserText}</button>
                    </div>
                )
            })}
        </ul>
    )
}
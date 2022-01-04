import {del} from "../../utils/requests";
import {useState} from "react";
import UsersList from "../../components/users-list/users-list";
import {useRouter} from "next/router";
import SearchBooks from "../choose-book/books";

const Users = ({users: serverUsers}) => {
    const [users, setUsers] = useState(serverUsers);
    const router = useRouter();

    function onDeleteUser(userId) {
        del(`/user/${userId}`, {
            id: userId
        })
            .then(res => setUsers(users.filter(user => user.id !== userId)))
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })
    }

    function onSelectBooks(userId) {
        router.push(`/choose-book/${userId}`)
    }

    return (
        <UsersList users={users} onDeleteUser={onDeleteUser} onSelectBooks={onSelectBooks}/>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:8080/user/list");
    const users = await res.json();

    return {
        props: {
            users
        }
    }
}

export default Users
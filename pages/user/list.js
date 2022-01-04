import {del} from "../../utils/requests";
import {useState} from "react";
import UsersList from "../../components/users-list/users-list";

const Users = ({users: serverUsers}) => {
    const [users, setUsers] = useState(serverUsers);

    function onDeleteUser(userId) {
        del(`/user/${userId}`, {
            id: userId
        })
            .then(res => setUsers(users.filter(user => user.id !== userId)))
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })
    }

    return (
        <UsersList users={users} onDeleteUser={onDeleteUser} />
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
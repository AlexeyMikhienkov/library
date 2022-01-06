import {del, get} from "../../utils/requests";
import {useState} from "react";
import UsersList from "../../components/users-list/users-list";
import {useRouter} from "next/router";
import Wrapper from "../../components/wrapper/wrapper";

export default function Users({users: serverUsers}) {
    const [users, setUsers] = useState(serverUsers);
    const router = useRouter();

    function deleteUser(userId) {
        del(`/user/${userId}`, {
            id: userId
        })
            .then(res => setUsers(users.filter(user => user.id !== userId)))
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })
    }

    function selectBooks(userId) {
        router.push(`/choose-book/${userId}`)
    }

    function takeBook(userId) {
        router.push(`/take-book/${userId}`)
    }

    function revertBook(userId) {
        router.push(`/revert-book/${userId}`)
    }

    return (
        <Wrapper>
            <UsersList users={users} onDeleteUser={deleteUser} onSelectBooks={selectBooks}
                       onTakeBook={takeBook} onRevertBook={revertBook} className={"wrapper__users-list"}/>
        </Wrapper>
    )
}

export async function getStaticProps() {
    const res = await get("/user/list");
    const users = res.data;

    return {
        props: {
            users
        }
    }
}
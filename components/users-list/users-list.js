import {
    deleteUserText,
    revertBookText,
    selectBooksHeader,
    takeBookText,
    usersTitle
} from "../../constants/copyright";
import {useRouter} from "next/router";
import Header from "../header/header";

export default function UsersList({users, onDeleteUser, onSelectBooks, onTakeBook, onRevertBook, className}) {
    const router = useRouter();

    return (
        <>
            <Header headerTitle={usersTitle}/>
            <div className={`${className} users-list`}>
                <ul className={"users-list__users"}>
                    {users.map(user => {
                        return (
                            <div className={"users-list__user user"} key={user.id}>
                                <li className={"user__item"}>
                                    <div className={"user__info"}>
                                        <p className={"user__data"}>
                                            {`${user.lastName} ${user.firstName} ${user.thirdName}, ${user.birthday}`}
                                        </p>
                                        <button className={"user__button user__button_delete"}
                                                onClick={() => onDeleteUser(user.id)}>{deleteUserText}</button>
                                    </div>
                                    <div className={"user__actions"}>
                                        <button className={"user__button user__button_select"}
                                                onClick={() => onSelectBooks(user.id)}>{selectBooksHeader}
                                        </button>
                                        <button className={"user__button user__button_select"}
                                                onClick={() => onTakeBook(user.id)}>{takeBookText}
                                        </button>
                                        <button className={"user__button user__button_select"}
                                                onClick={() => onRevertBook(user.id)}>{revertBookText}
                                        </button>
                                    </div>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
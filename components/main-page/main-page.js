import Link from "next/link";
import {addBookButtonText, addUserButtonText, booksTitle, usersTitle} from "../../constants/copyright";

export default function MainPage({className}) {
    return (
        <div className={`${className} main-page`}>
            <div className={"main-page__link-container"}>
                <Link href={'/users'}><a className={"main-page__link"}>{usersTitle}</a></Link><br/>
            </div>
            <div className={"main-page__link-container"}>
                <Link href={'/books'}><a className={"main-page__link"}>{booksTitle}</a></Link>
            </div>
            <div className={"main-page__link-container"}>
                <Link href={'/user/create'}><a className={"main-page__link"}>{addUserButtonText}</a></Link>
            </div>
            <div className={"main-page__link-container"}>
                <Link href={'/book/create'}><a className={"main-page__link"}>{addBookButtonText}</a></Link>
            </div>
        </div>
    )
}
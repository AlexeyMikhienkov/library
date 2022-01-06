import Link from "next/link";
import {booksTitle, usersTitle} from "../../constants/copyright";

export default function MainPage({className}) {
    return (
        <div className={`${className} main-page`}>
            <div className={"main-page__link-container"}>
                <Link href={'/users'}><a className={"main-page__link"}>{usersTitle}</a></Link><br/>
            </div>
            <div className={"main-page__link-container"}>
                <Link href={'/books'}><a className={"main-page__link"}>{booksTitle}</a></Link>
            </div>
        </div>
    )
}
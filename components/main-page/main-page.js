import Link from "next/link";
import {mainPageTitles} from "../../constants/constants";

export default function MainPage({className}) {
    return (
        <div className={`${className} main-page`}>
            {
                mainPageTitles.map(obj => {
                    return (
                        <div className={"main-page__link-container"}>
                            <Link href={obj.path}><a className={"main-page__link"}>{obj.title}</a></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
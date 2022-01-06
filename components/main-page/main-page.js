import Link from "next/link";
import {mainPageTitles} from "../../constants/constants";

export default function MainPage({className}) {
    return (
        <div className={`${className} main-page`}>
            {
                mainPageTitles.map(obj => {
                    const {title, path} = obj;

                    return (
                        <div key={title} className={"main-page__link-container"}>
                            <Link href={path}><a className={"main-page__link"}>{title}</a></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
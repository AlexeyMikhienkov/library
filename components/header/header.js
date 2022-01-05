import {goBack, mainPageTitle} from "../../constants/copyright";
import {useRouter} from "next/router";

export default function Header({headerTitle}) {
    const router = useRouter();

    return (
        <div className={"wrapper__header header"}>
            {headerTitle === mainPageTitle ?
                null :
                <button className={"header__button"} onClick={() => router.back()}>
                    <img className={"header__image"} src={'../../public/images/left_arrow.png'} alt={goBack}/>
                </button>
            }
            <div className={`header__title ${headerTitle === mainPageTitle ? "header__title_full-width" : ""}`}>
                {headerTitle}
            </div>
        </div>
    )
}
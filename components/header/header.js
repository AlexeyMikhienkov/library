import {goBack, mainPageTitle} from "../../constants/copyright";
import {useRouter} from "next/router";
import Image from 'next/image'
import backPicture from '../../public/images/left_arrow.png'

export default function Header({headerTitle}) {
    const router = useRouter();

    return (
        <div className={"wrapper__header header"}>
            {headerTitle === mainPageTitle ?
                null :
                <button className={"header__button"} onClick={() => router.back()}>
                    <Image className={"header__image"} src={backPicture} alt={goBack}/>
                </button>
            }
            <div className={`header__title ${headerTitle === mainPageTitle ? "header__title_full-width" : ""}`}>
                {headerTitle}
            </div>
        </div>
    )
}
import {goBack, goHome, mainPageTitle} from "../../constants/copyright";
import {useRouter} from "next/router";
import Image from 'next/image'
import backPicture from '../../public/images/left_arrow.png'
import homePicture from '../../public/images/home.png'

export default function Header({headerTitle}) {
    const router = useRouter();

    return (
        <div className={"wrapper__header header"}>
            <div className={`header__title ${headerTitle === mainPageTitle ? "header__title_full-width" : ""}`}>
                {headerTitle}
            </div>
            {headerTitle === mainPageTitle ?
                null :
                <>
                    <button className={"header__back-button"} onClick={router.back}>
                        <Image className={"header__image"} src={backPicture} alt={goBack}/>
                    </button>
                    <button className={"header__home-button"} onClick={() => router.push('/')}>
                        <Image className={"header__image"} src={homePicture} alt={goHome}/>
                    </button>
                </>
            }
        </div>
    )
}
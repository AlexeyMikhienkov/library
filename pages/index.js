import {mainPageTitle} from "../constants/copyright";
import Header from "../components/header/header";
import Wrapper from "../components/wrapper/wrapper";
import MainPage from "../components/main-page/main-page";

export default function Home() {
    return (
        <Wrapper>
            <Header headerTitle={mainPageTitle}/>
            <MainPage className={"wrapper__main-page"} />
        </Wrapper>
    )
}

//TODO:
// 4. Обработать ошибки с сервера и успешные запросы
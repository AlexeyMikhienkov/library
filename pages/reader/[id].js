import Reader from "../../components/reader/reader";
import {readers} from "../../constants/constants";

export default function ReaderPage() {
    return <Reader reader={readers[0]}/>
}
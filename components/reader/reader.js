import {readerData, readerHeader} from "../../constants/copyright";

export default function Reader({reader}) {
    return (
        <div className={"reader"}>
            <h3>{readerHeader}</h3>
            <div className={"reader__info"}>
                {Object.keys(reader).map(prop => {
                    console.log(prop)
                    return <p className={`reader__${prop}`}>
                        {`${readerData[prop]} ${reader[prop]}`}
                    </p>
                })}
            </div>
        </div>
    )
}
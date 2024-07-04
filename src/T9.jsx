import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function T9() {
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        setIndex(index + 1)
    }

    return (
        <div className={"w-screen h-screen flex items-center justify-center bg-gray-100"}>
            <div className={"grid w-96 p-4 gap-2 bg-white shadow-lg rounded-lg"}>
                <div className={"flex items-center pb-4"}>
                    <div className={"text-2xl font-semibold flex-grow"}>Tugas 9</div>
                    <div className={"text-gray-400/60 text-2xl font-bold"}>Route</div>
                </div>
                <div className={"grid bg-gray-100 p-2 rounded-lg"}>
                    <code>Daniel Kristian Jatmiko</code>
                    <code>A11.2021.13429</code>
                </div>
                <div className={"flex gap-4 justify-evenly"}>
                    <Button onClick={handleClick} variant={"outline"} size={"sm"}>
                        Klik {index} kali
                    </Button>
                    <Button size={"sm"} asChild>
                        <Link to={"/tugas5"}>
                            ke Tugas-5
                        </Link>
                    </Button>
                    <Button size={"sm"} asChild>
                        <Link to={"/tugas7"}>
                            ke Tugas-7
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

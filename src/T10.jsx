import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

export default function T9() {
    return (
        <div className={"w-screen h-screen flex items-center justify-center bg-gray-100"}>
            <div className={"grid w-96 p-4 gap-2 bg-white shadow-lg rounded-lg"}>
                <div className={"text-2xl font-semibold pb-4"}>Tugas 9</div>
                <div className={"grid bg-gray-100 p-2 rounded-lg"}>
                    <code>Daniel Kristian Jatmiko</code>
                    <code>A11.2021.13429</code>
                </div>
                <Button variant={"outline"} size={"sm"} asChild>
                    <Link to={"/tugas5"}>
                        ke Tugas-5
                    </Link>
                </Button>
            </div>
        </div>
    )
}

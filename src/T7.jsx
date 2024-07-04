import {Button} from "@/components/ui/button.jsx";

export default function T7() {
    return (
        <div className={"w-screen h-screen flex items-center justify-center bg-gray-100"}>
            <div className={"grid w-96 p-4 gap-2 bg-white shadow-lg rounded-lg"}>
                <div className={"flex items-center pb-4"}>
                    <div className={"text-2xl font-semibold flex-grow"}>Tugas 7</div>
                    <div className={"text-gray-400/60 text-2xl font-bold"}>Props</div>
                </div>
                <div className={"grid bg-gray-100 p-2 rounded-lg"}>
                    <code>Daniel Kristian Jatmiko</code>
                    <code>A11.2021.13429</code>
                </div>
                <Button onClick={() => console.log("Hello World!")} variant={"outline"} size={"sm"}>Hello World!</Button>
            </div>
        </div>
    )
}

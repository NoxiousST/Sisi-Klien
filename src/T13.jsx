import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ValueContext} from "@/Layout.jsx";
import {Input} from "@/components/ui/input.jsx";

export default function T12() {
    const { value, setValue } = useContext(ValueContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.slice(0,4)))
    }, []);

    return (
        <div className={"w-screen h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"}>
            <div className={"grid w-[30rem] p-4 gap-2 bg-white shadow-lg rounded-lg"}>
                <div className={"text-2xl font-semibold pb-4"}>Tugas 12</div>
                <div className={"grid bg-gray-100 p-2 rounded-lg"}>
                    <code>Daniel Kristian Jatmiko</code>
                    <code>A11.2021.13429</code>
                </div>
                <div className={"flex gap-4"}>
                    <Input onChange={(e) => setValue(e.target.value)} value={value}/>
                    <Button variant={"outline"} size={"sm"} className={"flex-grow"} asChild>
                        <Link to={"/tugas5"}>
                            ke Tugas-5
                        </Link>
                    </Button>
                </div>
                <div>
                    {users.map((user) => (
                        <div key={user.id} className={"flex gap-4 items-center"}>
                            <pre>{user.name}</pre>
                            <div className={"text-gray-400 text-xs"}>{user.email}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

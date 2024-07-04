import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function T10() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.slice(0,4)))
    }, []);

    return (
        <div className={"w-screen h-screen flex items-center justify-center bg-gray-100"}>
            <div className={"grid w-[30rem] p-4 gap-2 bg-white shadow-lg rounded-lg"}>
                <div className={"flex items-center pb-4"}>
                    <div className={"text-2xl font-semibold flex-grow"}>Tugas 10</div>
                    <div className={"text-gray-400/60 text-2xl font-bold"}>Fetch API</div>
                </div>
                <div className={"grid bg-gray-100 p-2 rounded-lg"}>
                    <code>Daniel Kristian Jatmiko</code>
                    <code>A11.2021.13429</code>
                </div>
                <Button variant={"outline"} size={"sm"} asChild>
                    <Link to={"/tugas5"}>
                        ke Tugas-5
                    </Link>
                </Button>
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

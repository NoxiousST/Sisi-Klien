import {useEffect, useState} from "react";

export default function T11() {
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
                    <div className={"text-2xl font-semibold flex-grow"}>Tugas 11</div>
                    <div className={"text-gray-400/60 text-2xl font-bold"}>Hooks</div>
                </div>
                <div className={"grid bg-gray-100 p-2 rounded-lg"}>
                    <code>Daniel Kristian Jatmiko</code>
                    <code>A11.2021.13429</code>
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

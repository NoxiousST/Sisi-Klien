import {useContext, useEffect, useState} from "react";
import {ValueContext} from "@/Layout.jsx";
import {Input} from "@/components/ui/input.jsx";
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement, incrementByAmount } from '@/lib/store.js';
import {Button} from "@/components/ui/button.jsx";

export default function T13() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

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
                <div className={"flex items-center pb-4"}>
                    <div className={"text-2xl font-semibold flex-grow"}>Tugas 13</div>
                    <div className={"text-gray-400/60 text-2xl font-bold"}>Redux</div>
                </div>
                <div className={"grid bg-gray-100 p-2 rounded-lg"}>
                    <code>Daniel Kristian Jatmiko</code>
                    <code>A11.2021.13429</code>
                </div>
                <div className={"flex gap-2 items-center"}>
                    <pre className={"place-content-center text-lg flex-grow text-center bg-gray-50 border-2 border-gray-200 rounded-lg h-full"}>{count}</pre>
                    <Button onClick={() => dispatch(increment())}>Increment</Button>
                    <Button onClick={() => dispatch(decrement())}>Decrement</Button>
                    <Button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</Button>
                </div>
                <div className={"flex gap-4"}>
                    <Input onChange={(e) => setValue(e.target.value)} value={value} placeholder={"Context"}/>
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

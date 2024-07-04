import {Link, Outlet} from "react-router-dom";
import {createContext, useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {Provider} from "react-redux";
import store from "@/lib/store.js";

export const ValueContext = createContext(null);

export default function Layout() {
    const [value, setValue] = useState("");

    return (
        <Provider store={store}>
            <ValueContext.Provider value={{value, setValue}}>
                <div className={"grid h-screen"}>
                    <div className={"flex gap-4 justify-center items-center font-semibold bg-gray-50 py-2 px-8"}>
                        <div className={"flex-grow"}>{value}</div>
                        <Button variant={"link"}>
                            <Link to={'/tugas5'}>Tugas 5</Link>
                        </Button>
                        <Button variant={"link"}>
                            <Link to={'/tugas6'}>Tugas 6</Link>
                        </Button>
                        <Button variant={"link"}>
                            <Link to={'/tugas7'}>Tugas 7</Link>
                        </Button>
                        <Button variant={"link"}>
                            <Link to={'/tugas8'}>Tugas 8</Link>
                        </Button>
                        <Button variant={"link"}>
                            <Link to={'/tugas9'}>Tugas 9</Link>
                        </Button>
                        <Button variant={"link"}>
                            <Link to={'/tugas10'}>Tugas 10</Link>
                        </Button>
                        <Button variant={"link"}>
                            <Link to={'/tugas11'}>Tugas 11</Link>
                        </Button>
                        <Button variant={"link"}>
                            <Link to={'/tugas12'}>Tugas 12</Link>
                        </Button>
                        <Button variant={"link"}>
                            <Link to={'/tugas13'}>Tugas 13</Link>
                        </Button>
                    </div>
                    <Outlet/>
                </div>
            </ValueContext.Provider>
        </Provider>
    )
}

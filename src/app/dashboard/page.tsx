"use client";
import { useState } from "react";

export default function DashboardPage() {
    console.log("a");
    const [name, setName] = useState("");
    return (
        <div>
            <h1>Dashboard</h1>
            <input value={name} type="text" onChange={e => setName(e.target.value)} />
            <p>Hello, {name} !</p>
        </div>


        );
}
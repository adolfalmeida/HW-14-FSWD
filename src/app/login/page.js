
"use client"
import { useState } from "react"
import { login } from "@/fetching/auth";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async () => {
        await login({email, password});
        router.push("/")
    }

    return (
        <div>
            <input style={{display: "block", marginBottom: "2px", padding: "10px"}} 
                type="text" 
                placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}/>
            <input style={{display: "block", marginBottom: "2px", padding: "10px"}} 
                type="password" 
                placeholder="Enter password" 
                onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}
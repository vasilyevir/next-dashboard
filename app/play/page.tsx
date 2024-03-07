"use client";

import {NextPage} from "next";
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {constants} from "@/app/play/constants/constants";

const Page: NextPage =  () => {
    const [value, setValue] = useState("");
    const [step, setStep] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (val: ChangeEvent<HTMLInputElement>) => {
        setValue(val.target.value);
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (value.toLowerCase() === constants[step].value.toLowerCase()) {
            setStep(step + 1);
            setValue("");
            if (inputRef.current) {
                inputRef.current.value = "";
            }
            setError(null);
        } else {
            setError("Ответ не правильный. Продолжай искать ;)")
        }
    }

    return (<form style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "120px"
    }}
    onSubmit={onSubmit}
    >
        <h1 style={{
            textAlign: "center"
        }}>Step {step}: <br/> {constants[step].question}</h1>
        <label htmlFor="value" style={{
            width: "100%",
            borderRadius: "5px",
        }}>
            <input style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
            }} id="value" ref={inputRef} onChange={onChange}/>
        </label>
        <span style={{
            color: "red"
        }}>{error}</span>
        <button style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#2a2a71",
            color: "white"
        }} type="submit">Send</button>
    </form>);
}

export default Page;
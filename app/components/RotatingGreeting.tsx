"use client";
import { useEffect, useState } from "react";

const greetings = [
    "Hi",
    "안녕",
    "Hola",
    "Bonjour",
    "こんにちは",
    "你好",
    "Olá",
    "Ciao",
];

const FADE_MS = 250;
const HOLD_MS = 500;

const RotatingGreeting = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let mounted = true;
        const cycle = () => {
            if (!mounted) return;
            setVisible(false);
            setTimeout(() => {
                if (!mounted) return;
                setIndex((i) => (i + 1) % greetings.length);
                setVisible(true);
            }, FADE_MS);
        };
        const interval = setInterval(cycle, HOLD_MS + FADE_MS);
        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, []);

    return (
        <span
            className="inline-block"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(0.5rem)",
                transition: `opacity ${FADE_MS}ms ease-out, transform ${FADE_MS}ms ease-out`,
            }}
        >
            {greetings[index]}
        </span>
    );
};

export default RotatingGreeting;

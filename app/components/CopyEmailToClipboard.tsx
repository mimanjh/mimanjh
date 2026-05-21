"use client";
import React from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import Alert from "./Alert";

const EMAIL = "jacobjhunsaker@gmail.com";

const CopyEmailToClipboard = () => {
    const [isCopied, setIsCopied] = React.useState(false);

    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = EMAIL;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }

        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    return (
        <>
            <button
                onClick={copyEmailToClipboard}
                aria-label="Copy email to clipboard"
                title="Copy email"
                className="btn btn-ghost btn-circle"
            >
                {isCopied ? <FiCheck size={22} /> : <FiCopy size={22} />}
            </button>
            {isCopied && (
                <Alert text="Email copied to clipboard." success={true} />
            )}
        </>
    );
};

export default CopyEmailToClipboard;

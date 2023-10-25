"use client";
import React from "react";
import Alert from "./Alert";

const CopyEmailToClipboard = () => {
    const [isCopied, setIsCopied] = React.useState(false);
    const copyEmailToClipboard = () => {
        const textarea = document.createElement("textarea");
        textarea.value = "jacob.hunasker96@gmail.com";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    return (
        <>
            <button
                className="btn bg-accent-content join-item"
                onClick={copyEmailToClipboard}
            >
                Email
            </button>
            {isCopied && (
                <Alert text="Email copied to clipboard." success={true} />
            )}
        </>
    );
};

export default CopyEmailToClipboard;

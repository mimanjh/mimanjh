import React from "react";
import CopyEmailToClipboard from "./CopyEmailToClipboard";

const Contact = () => {
    return (
        <section id="contact" className="text-center">
            <p className="py-6">
                Please feel free to contact me via any of the following:
            </p>
            <div className="join join-vertical lg:join-horizontal">
                <a
                    href="https://github.com/mimanjh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-neutral join-item"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/jacobjhunsaker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary join-item"
                >
                    LinkedIn
                </a>
                <a
                    href="https://dev.to/mimanjh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-base-300 join-item"
                >
                    Dev.To
                </a>
                <CopyEmailToClipboard />
            </div>
        </section>
    );
};

export default Contact;

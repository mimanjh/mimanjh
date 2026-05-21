import React from "react";

const Alert = ({ text, success }: { text: string; success: boolean }) => {
    const alertClass = success ? "alert alert-success" : "alert alert-warning";

    return (
        <div className="toast toast-top toast-center z-50">
            <div className={alertClass}>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Alert;

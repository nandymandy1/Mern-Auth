import React from "react";

const Spinner = ({ colorClass, size }) => (
    <div className={`spinner-border ${size} ${colorClass}`} role="status">
        <span className="sr-only">Loading...</span>
    </div>
);

export const SpinnerGrow = () => (
    <>
        <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </>
);
export default Spinner;
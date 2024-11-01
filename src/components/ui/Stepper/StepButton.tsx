"use client";
import React from 'react';

interface StepButtonProps {
    isActive: boolean;
    onClick: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({ isActive, onClick }) => {
    const defaultColor = "#D9D9D9"; 
    const activeColor = "#fe6f43"; 

    return (
        <button 
            onClick={onClick}
            className="w-[70px] h-[7px] rounded-full"
            style={{ backgroundColor: isActive ? activeColor : defaultColor }}
        >
            <span></span>
        </button>
    );
}

export default StepButton;

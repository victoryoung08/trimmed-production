import React, { useEffect, useState } from 'react';
import { Input } from '../../input';

interface AdsCampainProps {
    onNext: (data: string) => void;
    selected: string | undefined
}

const AdsCampain: React.FC<AdsCampainProps> = ({ onNext, selected }) => {

    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onNext(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onNext(inputValue);
        }
    };

    useEffect(() => {
        if (typeof selected === 'string') {
            setInputValue(selected);
        }
    }, [selected]);

    return (
        <div>
            <p className="italic mb-2">What do you need help with?</p>
            <h5 className="text-2xl font-semibold mb-4">What do you need help with?</h5>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center bg-white border border-gray-300 rounded-xl overflow-hidden max-w-80 w-full px-2">
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown} // Add onKeyDown to capture Enter key
                        placeholder=""
                        className="border-none focus-visible: outline-none w-[80%]"
                    />
                    <span className="text-gray-300 text-sm">per month</span>
                </div>
            </div>
        </div>
    );
};

export default AdsCampain;

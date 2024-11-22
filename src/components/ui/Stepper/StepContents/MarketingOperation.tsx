import React, { useEffect, useState } from 'react';
import { TextBox } from '../../TextBox';

interface AdsCampaignProps {
    onNext: (data: string) => void;
    selected: string | undefined
}

const AdsCampaign: React.FC<AdsCampaignProps> = ({ onNext, selected }) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
        onNext(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
                <div className="max-w-80 w-full">
                    <TextBox
                        value={inputValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown} // Add onKeyDown to capture Enter key
                        placeholder=""
                        className="bg-white h-20"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdsCampaign;

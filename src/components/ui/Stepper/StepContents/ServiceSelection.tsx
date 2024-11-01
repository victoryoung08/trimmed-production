import React, { useState } from 'react';
import { Checkbox } from '../../checkbox';

interface ServiceSelectionProps {
    setServiceDropDown: (value: number | null) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ setServiceDropDown }) => {
    const list = [
        "Paid Ads/PPC Campaign (Google/Meta)",
        "Help with our marketing operations and implementation",
        "Fractional CMO/Strategise and lead our marketing team"
    ];

    const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

    const handleCheckboxChange = (index: number) => {
        const newIndex = selectedServiceIndex === index ? null : index;
        setSelectedServiceIndex(newIndex);
        setServiceDropDown(newIndex);
    };

    return (
        <div>
            <h5 className="text-4xl font-semibold mb-4">What do you need help with?</h5>
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-2">
                    {list.map((service, index) => (
                        <label key={index} className="flex items-center gap-2">
                            <Checkbox
                                checked={selectedServiceIndex === index}
                                onCheckedChange={() => handleCheckboxChange(index)}
                                className="rounded-full bg-white"
                            />
                            <span className="text-gray-800 text-base">{service}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSelection;

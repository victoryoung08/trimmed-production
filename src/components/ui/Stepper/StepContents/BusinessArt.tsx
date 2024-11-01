import React, { useState } from 'react';
import { CheckCircledIcon } from '@radix-ui/react-icons';

interface BusinessData {
    id: number;
    title: string;
    body: string;
}

const BusinessArt: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const data: BusinessData[] = [
        {
            id: 1,
            title: "New Business",
            body: "You’re just getting started and looking to drive immediate revenue",
        },
        {
            id: 2,
            title: "Growth",
            body: "You’re expanding your team and knuckling down on pipeline, leads and sales.",
        },
        {
            id: 3,
            title: "Scale",
            body: "You’re well into product market fit and you’re looking to launch multiple verticals.",
        },
    ];

    const handleSelection = (id: number) => {
        setSelectedId(prevId => (prevId === id ? null : id));
    };

    return (
        <div>
            <h5 className="text-4xl font-semibold mb-4">Where’s your business at?</h5>
            <div className="flex justify-center gap-2 cursor-pointer">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`w-[226px] p-4 border border-gray-300 rounded-lg transition duration-200 ease-in-out group ${selectedId === item.id ? 'bg-white hover:shadow-md' : 'hover:bg-white hover:shadow-md'
                            }`}
                        onClick={() => handleSelection(item.id)}
                    >
                        <div className="flex items-center justify-between">
                            <h6 className="font-bold text-xl text-gray-800 text-start mb-2">{item.title}</h6>
                            <span className={`text-black text-4xl transition duration-200 ${selectedId === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                <CheckCircledIcon />
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 text-start">{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessArt;

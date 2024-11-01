import { useState } from "react";
import { TextBox } from "../../TextBox";

export default function FractionalStrategise() {
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <p className="italic mb-2">Let’s build pipeline.</p>
            <h5 className="text-2xl font-semibold mb-4">What do you need help with?</h5>
            <div className="flex items-center justify-center">
                <div className="max-w-80 w-full">
                    <TextBox
                        value={inputValue}
                        onChange={handleChange}
                        placeholder=""
                        className="bg-white h-20"
                    />
                </div>
            </div>
        </div>
    )
}
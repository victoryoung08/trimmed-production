import { useState } from "react";
import { Input } from "../../input";

interface FormData {
    name: string;
    phone: string;
    email: string;
    website: string;
}

export default function MarketingAuditQuote() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        website: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <h5 className="text-2xl font-semibold mb-4">Get a Marketing Audit & Quote</h5>
            <div className="flex items-center justify-center">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full max-w-lg">
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="bg-white border w-full p-2 rounded-xl"
                    />
                    <Input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="bg-white border w-full p-2 rounded-xl"
                    />
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="bg-white border w-full p-2 rounded-xl"
                    />
                    <Input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Enter your website / company name"
                        className="bg-white border w-full p-2 rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}

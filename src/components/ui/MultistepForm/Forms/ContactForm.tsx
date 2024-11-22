import FormWrapper from "../FormWrapper";

type UserData = {
  name: string;
  email: string;
  phone: string;
};

type ContactFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};
export default function ContactForm({ updateFields }: ContactFormProps) {
  return (
    <FormWrapper title="What are your details?">
      <div className="space-y-4 w-full">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="multistep-text_input"
            onChange={(e) => {
              updateFields({ name: e.target.value });
            }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="multistep-text_input"
            required
            onChange={(e) => {
              updateFields({ email: e.target.value });
            }}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="multistep-text_input"
            required
            onChange={(e) => {
              updateFields({ phone: e.target.value });
            }}
          />
        </div>
      </div>
    </FormWrapper>
  );
}


type FormWrapperProps = {
  title: string;
  children: React.ReactNode;
};
export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div className="h-[640px] md:h-[540px] max-w-4xl w-full text-center flex flex-col items-center justify-center">
      <h3 className="text-center mb-4 capitalize text-pretty">{title}</h3>
      <div className="flex-start mt-8">{children}</div>
    </div>
  );
}

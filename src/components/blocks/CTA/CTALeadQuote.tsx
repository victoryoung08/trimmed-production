// "use client";
// import { CircleCheck } from "lucide-react";
// import { twMerge } from "tailwind-merge";
// import { useState } from "react";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function CTALeadQuote() {
//   const [stage, setStage] = useState<string>("Growth");
//   const [formData, setFormData] = useState({
//     budget: "retainer",
//     stage: "Growth",
//     paidAds: false,
//     marketingOps: false,
//     cmo: false,
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const [formStep, setFormStep] = useState(1);

//   const [budgetChoice, setBudgetChoice] = useState("retainer");

//   const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       budget: `${e.target.value} ${budgetChoice}`,
//     }));
//   };

//   const handleStageChange = (stage: string) => {
//     setStage(stage);
//     setFormData((prev) => ({ ...prev, stage: stage }));
//   };

//   const handleMarketingChange = (name: keyof typeof formData) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   const handleBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       budget: `${e.target.value} ${budgetChoice}`,
//     }));
//   };

//   const handleBudgetChoice = (value: string) => {
//     setBudgetChoice(value);
//     setFormData((prev) => ({
//       ...prev,
//       budget: `${prev.budget.split(" ")[0]} ${value}`,
//     }));
//   };

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const name = formData.get("name") as string;
//     const phone = formData.get("phone") as string;

//     const formBody = {
//       stage: stage,
//       name: name,
//       email: "",
//       phone: phone,
//       company: "",
//     };
//     console.log(formBody);
//   };
//   const checkedContent = [
//     {
//       heading: "Starting",
//       body: "Stuff about starting",
//     },
//     {
//       heading: "Growth",
//       body: "You're expanding your team and you're knuckling down into more leads, users and customers",
//     },
//     {
//       heading: "Scale",
//       body: "You're well into product market fit, you're launch multiple verticals",
//     },
//   ];

//   const services = [
//     {
//       name: "paidAds",
//       label: "Paid Ads/PPC Campaign (Google/Meta)",
//     },
//     {
//       name: "marketingOps",
//       label: "Help with our marketing opeations and implementation",
//     },
//     {
//       name: "cmo",
//       label: "Fractional CMO/Lead with Marketing Strategy",
//     },
//   ];

//   return (
//     <section className="section-padding-medium bg-foreground">
//       <div className="container-global">
//         <div>
//           <div className="bg-background px-8 py-8 rounded-md">
//             <div>{JSON.stringify(formData)}</div>
//             <form
//               action=""
//               onSubmit={handleFormSubmit}
//               className="min-h-[90vh]"
//             >
//               <div
//                 className={twMerge(
//                   "h-[400px] border-black border-[1px] flex flex-col items-center justify-center"
//                 )}
//               >
//                 {formStep === 1 && (
//                   <div className="flex flex-col items-center justify-center">
//                     <div className="py-4">
//                       <h5 className="text-2xl">
//                         Where&apos;s your business at?
//                       </h5>
//                     </div>
//                     <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-2">
//                       {checkedContent.map((content) => (
//                         <div
//                           className={twMerge(
//                             "p-4 rounded-lg border-foreground flex outline-1 outline",
//                             stage === content.heading ? "outline-2" : ""
//                           )}
//                           key={content.heading}
//                           onClick={() => handleStageChange(content.heading)}
//                         >
//                           <div className="flex-grow">
//                             <h5 className="text-2xl">{content.heading}</h5>
//                             <p className="flex-grow text-base md:text-base">
//                               {content.body}
//                             </p>
//                           </div>
//                           <div className="w-8 min-w-8 flex items-start justify-center">
//                             <CircleCheck
//                               size={28}
//                               strokeWidth="thin"
//                               fill="#222222"
//                               color="white"
//                               className={twMerge(
//                                 stage === content.heading ? "block" : "hidden"
//                               )}
//                             />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//                 {/* What do you need help */}
//                 {formStep === 2 && (
//                   <div className="py-4 flex flex-col gap-8 items-center justify-center">
//                     <h5 className="text-2xl">What do you need help with?</h5>
//                     <div className="flex flex-col gap-2">
//                       {services.map((service) => (
//                         <div className="flex items-center gap-2">
//                           <Checkbox
//                             id={service.name}
//                             checked={Boolean(
//                               formData[service.name as keyof typeof formData]
//                             )}
//                             onCheckedChange={() =>
//                               handleMarketingChange(
//                                 service.name as
//                                   | "paidAds"
//                                   | "marketingOps"
//                                   | "cmo"
//                               )
//                             }
//                             className="h-5 w-5 rounded-[50%] border border-foreground/30 bg-white data-[state=checked]:bg-foreground data-[state=checked]:text-white"
//                           />
//                           <Label
//                             htmlFor={service.name}
//                             className="text-lg font-normal"
//                           >
//                             {service.label}
//                           </Label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//                 {formStep === 3 && (
//                   <div className="flex flex-col gap-8 items-center justify-center">
//                     <h3>What is your marketing budget</h3>
//                     <div className="flex items-center h-[36px] gap-2">
//                       <div className="relative h-full">
//                         <input
//                           type="text"
//                           name="budget"
//                           className="pl-6 h-full rounded-lg"
//                           onChange={handleBudgetChange}
//                         />
//                         <span className="absolute left-[8px] text-sm top-1/2 -translate-y-1/2">
//                           $
//                         </span>
//                       </div>
//                       <Select
//                         defaultValue={"retainer"}
//                         onValueChange={(value) => handleBudgetChoice(value)}
//                       >
//                         <SelectTrigger className="w-[180px]">
//                           <SelectValue placeholder="per month" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="retainer">per month</SelectItem>
//                           <SelectItem value="project">by project</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               {/* <div
//                 className={twMerge(
//                   "h-full",
//                   formStep === 2 ? "block" : "hidden"
//                 )}
//               >
//                 <div className="py-4">
//                   <h5 className="text-2xl">
//                     What&apos;s your best contact number?
//                   </h5>
//                   <input
//                     type="text"
//                     placeholder="Enter your phone number"
//                     name="phone"
//                   />
//                 </div>
//                 <div className="py-4">
//                   <h5 className="text-2xl">What&apos;s your name?</h5>
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     name="name"
//                   />
//                 </div>

//                 <div>
//                   <button
//                     className="main-button"
//                     onClick={() => setFormStep((prev) => prev + 1)}
//                     type="button"
//                   >
//                     Next
//                   </button>
//                   <button
//                     className="main-button"
//                     onClick={() => setFormStep((prev) => prev - 1)}
//                     type="button"
//                   >
//                     Back
//                   </button>
//                 </div>
//               </div> */}
//               <div className="w-full grid grid-cols-2 items-center justify-center gap-20">
//                 {formStep !== 1 ? (
//                   <div className="ml-auto">
//                     <button
//                       className="secondary-button"
//                       onClick={() => setFormStep((prev) => prev - 1)}
//                       type="button"
//                     >
//                       Back
//                     </button>
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
//                 <div className="mr-auto">
//                   <button
//                     className="main-button"
//                     onClick={() => setFormStep((prev) => prev + 1)}
//                     type="button"
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//               {formStep === 3 && (
//                 <div>
//                   <button className="main-button" type="submit">
//                     Get A Quote
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

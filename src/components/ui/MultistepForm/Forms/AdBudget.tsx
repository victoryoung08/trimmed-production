type UserBudgetData = {
  adBudget: string;
};

type AddBudgetProps = UserBudgetData & {
  updateFields: (fields: UserBudgetData) => void;
};

export default function AddBudget({ updateFields }: AddBudgetProps) {
  return (
    <div>
      <label htmlFor="">Enter your ad budget per month</label>
      <input
        type="text"
        name="adBudget"
        onChange={(e) => updateFields({ adBudget: e.target.value })}
      />
    </div>
  );
}

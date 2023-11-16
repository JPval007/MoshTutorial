import { categories } from "../data/categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <>
      <select
        onChange={(event) => onSelectCategory(event.target.value)}
        id="category"
        className="form-select form-select-lg mb-3 mt-5"
        aria-label="Large select example"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default ExpenseFilter;

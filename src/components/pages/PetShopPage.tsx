import DayStore from "../partials/DayStore";
import "../styles.css";

export default function PetShopPage() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return (
    <>
      <h1>Welcome to the pet store</h1>

      <h2>Pets and pet owners</h2>

      <h2>Pet stock</h2>
      <div className="row">
        {daysOfWeek.map((day) => (
          <DayStore day={day} />
        ))}
      </div>
    </>
  );
}

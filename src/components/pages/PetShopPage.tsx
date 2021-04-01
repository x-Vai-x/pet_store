import DayStore from "../partials/DayStore";
import "../styles.css";

export default function PetShopPage() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return (
    <>
      <div className="row">
        {daysOfWeek.map((day) => (
          <DayStore day={day} />
        ))}
      </div>
    </>
  );
}

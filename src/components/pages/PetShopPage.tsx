import DayStore from "../partials/DayStore";
import { useSelector } from "../../redux/rootReducer";

import "../styles.css";

export default function PetShopPage() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const { pets } = useSelector((state) => state.pets);
  return (
    <>
      <h1>Welcome to the pet store</h1>

      <div className="row">
        <div className="row">
          <div className="column">
            <h2>Pets and pet owners</h2>
            {pets.map((pet) => (
              <div className="rectangle-pet">Pet owner: {pet}</div>
            ))}
          </div>
        </div>
        <div className="column">
          <h2>Pet stock</h2>
          <div className="row">
            {daysOfWeek.map((day) => (
              <DayStore day={day} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

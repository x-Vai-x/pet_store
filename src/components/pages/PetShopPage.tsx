import Stock from "../partials/Stock";
import { useSelector } from "../../redux/rootReducer";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "../styles.css";

import PetInfo from "../partials/PetInfo";
import PetDialog from "../dialogs/PetDialog";

export default function PetShopPage() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const {
    unstockedPets,
    mondayStockedPets,
    tuesdayStockedPets,
    wednesdayStockedPets,
    thursdayStockedPets,
    fridayStockedPets,
  } = useSelector((state) => state.pets);

  function onDragEnd() {}

  return (
    <>
      <h1>Welcome to the pet store</h1>

      <div className="row">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="row">
            <div className="column">
              <h2>Pets and pet owners</h2>
              <PetDialog />
              <Droppable droppableId={"None"}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {unstockedPets.map((pet, i) => (
                      <PetInfo key={i} pet={pet} index={i} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
          <div className="column">
            <h2>Pet stock</h2>
            <div className="row">
              {daysOfWeek.map((day) => (
                <Stock
                  day={day}
                  pets={eval(day.toLowerCase() + "StockedPets")}
                />
              ))}
            </div>
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

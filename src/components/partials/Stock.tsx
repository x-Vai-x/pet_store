import "../styles.css";
import { Droppable } from "react-beautiful-dnd";
import { Pet } from "../../dataTypes";
import PetInfo from "./PetInfo";

interface IProps {
  day: string;
  pets: Pet[];
}

export default function Stock({ day, pets }: IProps) {
  return (
    <Droppable droppableId={day}>
      {(provided) => (
        <div
          className="rectangle-column"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <header>
            <h1>{day}</h1>
          </header>
          {provided.placeholder}

          {pets.map((pet, i) => (
            <PetInfo pet={pet} index={i} />
          ))}
        </div>
      )}
    </Droppable>
  );
}

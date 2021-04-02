import "../styles.css";

import { Draggable } from "react-beautiful-dnd";
import { Pet } from "../../dataTypes";

interface IProps {
  pet: Pet;
  index: number;
}

export default function PetInfo({ pet, index }: IProps) {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <div
          className="rectangle-pet"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          Pet owner: {pet.petOwner}
        </div>
      )}
    </Draggable>
  );
}

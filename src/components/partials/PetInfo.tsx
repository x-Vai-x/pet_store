import "../styles.css";

import { Draggable } from "react-beautiful-dnd";
import { Pet } from "../../dataTypes";

interface IProps {
  pet: Pet;
  index: number;
}

export default function PetInfo({ pet, index }: IProps) {
  return (
    <Draggable draggableId={pet.id.toString()} index={index}>
      {(provided) => (
        <div
          className="rectangle-pet"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="column">
            Pet owner: {pet.petOwner}
            {pet.petImage ? <img src={pet.petImage} /> : <p> No Image</p>}
          </div>
        </div>
      )}
    </Draggable>
  );
}

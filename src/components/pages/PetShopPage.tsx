import Stock from "../partials/Stock";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/rootReducer";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import "../styles.css";

import PetInfo from "../partials/PetInfo";
import PetDialog from "../dialogs/PetDialog";

import React, { useEffect, useState } from "react";
import { Pet } from "../../dataTypes";

import { updatePet } from "../../redux/slices/petsSlice";

export default function PetShopPage() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const { pets } = useSelector((state) => state.pets);
  const dispatch = useDispatch();

  const [unstockedPets, setUnstockedPets] = useState<Pet[]>([]);
  const [mondayStockedPets, setMondayStockedPets] = useState<Pet[]>([]);
  const [tuesdayStockedPets, setTuesdayStockedPets] = useState<Pet[]>([]);
  const [wednesdayStockedPets, setWednesdayStockedPets] = useState<Pet[]>([]);
  const [thursdayStockedPets, setThursdayStockedPets] = useState<Pet[]>([]);
  const [fridayStockedPets, setFridayStockedPets] = useState<Pet[]>([]);

  useEffect(() => {
    setUnstockedPets([]);
    setMondayStockedPets([]);
    setTuesdayStockedPets([]);
    setWednesdayStockedPets([]);
    setThursdayStockedPets([]);
    setFridayStockedPets([]);

    pets.forEach((pet) => {
      switch (pet.dayInStock) {
        case "Monday":
          setMondayStockedPets([...mondayStockedPets, pet]);
          break;
        case "Tuesday":
          setTuesdayStockedPets([...tuesdayStockedPets, pet]);
          break;
        case "Wednesday":
          setWednesdayStockedPets([...wednesdayStockedPets, pet]);
          break;
        case "Thursday":
          setThursdayStockedPets([...thursdayStockedPets, pet]);
          break;
        case "Friday":
          setFridayStockedPets([...fridayStockedPets, pet]);
          break;

        case "None":
          setUnstockedPets([...unstockedPets, pet]);
      }
    });
  }, [pets]);
  function onDragEnd(res: DropResult) {
    const pet = pets.find((p) => p.id === Number(res.draggableId));

    if (!pet || !res.destination) return;

    dispatch(updatePet({ ...pet, dayInStock: res.destination.droppableId }));
  }

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

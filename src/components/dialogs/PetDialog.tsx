import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "@material-ui/icons";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  TextField,
} from "@material-ui/core";
import { addPet } from "../../redux/slices/petsSlice";
import { useSelector } from "../../redux/rootReducer";

export default function PetDialog() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ pet_owner: "" });
  const dispatch = useDispatch();
  const { pets } = useSelector((state) => state.pets);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function submitForm(e: any) {
    e.preventDefault();
    const { pet_owner } = values;
    dispatch(
      addPet({ id: pets.length, petOwner: pet_owner, dayInStock: "None" })
    );
    setOpen(false);
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Add />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={submitForm}>
          <DialogTitle>Add pet.</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="pet_owner"
              onChange={handleInputChange}
              label="Pet owner name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

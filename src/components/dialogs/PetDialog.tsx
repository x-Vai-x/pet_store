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
import { Pet } from "../../dataTypes";

export default function PetDialog() {
  const [open, setOpen] = useState(false);
  const { pets } = useSelector((state) => state.pets);
  const initialValues = {
    id: pets.length,
    petOwner: "",
    petImage: undefined,
    dayInStock: "None",
  };
  const [values, setValues] = useState<Pet>(initialValues);
  const dispatch = useDispatch();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setValues(initialValues);
  }

  function submitForm(e: any) {
    e.preventDefault();

    dispatch(addPet(values));
    setOpen(false);

    setValues(initialValues);
  }

  function handleInputChange(e: any) {
    const { name, value, type } = e.target;
    if (type === "file") {
      const reader = new FileReader();
      reader.onload = function (e) {
        setValues({
          ...values,
          [name]: e.target?.result?.toString() ?? undefined,
        });
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setValues({ ...values, [name]: value, id: pets.length });
    }
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
              name="petOwner"
              onChange={handleInputChange}
              label="Pet owner name"
              type="text"
              fullWidth
            />
            <Button variant="contained" component="label">
              Upload Image
              <input
                type="file"
                accept="image/*"
                hidden
                name="petImage"
                onChange={handleInputChange}
              />
            </Button>
            {values.petImage ? (
              <img src={values.petImage}></img>
            ) : (
              <p> No Image</p>
            )}
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

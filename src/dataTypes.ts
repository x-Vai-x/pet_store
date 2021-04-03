import React from "react";

export interface Pet {
  id: number;
  petOwner: string;
  petImage: string | undefined;
  dayInStock: string;
}

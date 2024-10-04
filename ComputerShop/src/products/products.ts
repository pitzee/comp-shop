import HPVictus from "../assets/images/HP-Victus-Gaming-2024-300x300.jpg";
export interface computer {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const Computers: computer[] = [
  {
    id: 1,
    name: "HP-Victus-Gaming",
    price: 20000,
    image: HPVictus,
  },
];

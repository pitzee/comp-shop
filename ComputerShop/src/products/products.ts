import HPVictus from "../assets/images/HP-Victus-Gaming-2024-300x300.jpg";
import HPELITBOOK845G81 from "../assets/images/HP-ELITBOOK-845-G8-1-300x300.jpg";
import HPELITBOOK845G82 from "../assets/images/HP-ELITBOOK-845-G8-2-300x300.jpg";
import MSIKATANAGaming2024 from "../assets/images/MSI-KATANA-Gaming-2024-300x300.jpg";
import MsiThinGF63 from "../assets/images/Msi-Thin-GF63-300x300.jpg";
import ZbookFirefly14G8 from "../assets/images/Zbook-Firefly-14-G8-300x300.jpg";

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
  {
    id: 2,
    name: "HP-ELITBOOK-845-G8-1",
    price: 20000,
    image: HPELITBOOK845G81,
  },
  {
    id: 3,
    name: "HP-ELITBOOK-845-G8-2",
    price: 20000,
    image: HPELITBOOK845G82,
  },
  {
    id: 4,
    name: "MSI-KATANA-Gaming-2024",
    price: 20000,
    image: MSIKATANAGaming2024,
  },
  {
    id: 5,
    name: "Msi-Thin-GF63",
    price: 20000,
    image: MsiThinGF63,
  },
  {
    id: 6,
    name: "Zbook-Firefly-14-G8",
    price: 20000,
    image: ZbookFirefly14G8,
  },
];

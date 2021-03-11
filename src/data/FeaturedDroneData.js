import { v4 as uuidv4 } from "uuid";
import product from "../assets/product/product-1.png";

export default [
  {
    id: uuidv4(),
    section: "Laptop",
    product_name: "Zeon Zen 4 Pro",
    price: "$230.00",
    src: product,
  },
];

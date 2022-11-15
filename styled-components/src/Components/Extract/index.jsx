import React from "react";
import { Box } from '../UI'
import { extractsList } from "../../info";
import Itens from "../Itens";

export default function Extract() {
  return (
    <Box>
      {extractsList.map((item) => (
        <Itens key={item.id} item={item}/>
      ))}
    </Box>
  )
}

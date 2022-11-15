import React from "react";
import { Box } from '../UI'
import { extractsList } from "../../info";

export default function Extract() {
  return (
    <Box>
      {extractsList.map(({id, type, from, value, date}) => (
        <div key={id}>
          <div>{type}</div>
          <div>{from}</div>
        </div>
      ))}
    </Box>
  )
}

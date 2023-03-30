import React, { useState } from "react";
// import {
//   OutlinedInput,
//   InputLabel,
//   MenuItem,
//   Select,
//   FormControl,
//   Stack,
//   Chip
// } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import CheckIcon from "@mui/icons-material/Check";

import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const names = [
  "Cough",
  "Fever",
  "Pain",
  "Headache",
  "Vomitting",
  "Loose Motions",
  "Constipation",
  "Fatigue",
  "Weakness",
  "Cold"
];
export default function MultiSelect() {
  return(
  <Autocomplete className="AutoCompleteBox"
      sx={{ m: 1, width: 500 }}
      multiple
      options={names}
      getOptionLabel={(option) => option}
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Symptoms"
          placeholder="Symptoms"
        />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem
          {...props}
          key={option}
          value={option}
          sx={{ justifyContent: "space-between" }}
        >
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
    />
  );
}

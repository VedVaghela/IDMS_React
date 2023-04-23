// import React, { useState, useEffect} from "react";
// // import {
// //   OutlinedInput,
// //   InputLabel,
// //   MenuItem,
// //   Select,
// //   FormControl,
// //   Stack,
// //   Chip
// // } from "@mui/material";
// // import CancelIcon from "@mui/icons-material/Cancel";
// // import CheckIcon from "@mui/icons-material/Check";

// import { TextField, Autocomplete, MenuItem } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";

// export default function MultiSelect() {

//   const [symptom,setSymptoms] = useState([])
  
//   const [selecteds,setSelecteds] = useState([])

//   const token = sessionStorage.getItem("token")

//   useEffect(() => {
//     fetch('https://web-production-d445c.up.railway.app/appointments/symptom/', {
//       method: 'GET',
//       headers: {
//          'Accept': 'application/json',
//          'Authorization': `Bearer ${token}`
//       },
  
//    })
//       .then((res) => res.json())
//       .then((symp) => setSymptoms(symp))
//       .then(()=>console.log(symptom))
     
//       .then((data)=>console.log(data))
//       .catch((err) => {
//          console.log(err.message);
//       });
  
//       console.log(symptom)
  
     
//   },[])

//   const symptom_key = symptom.map(s => s.id)
//   const symptom_name = symptom.map(s => s.name)
//   console.log(symptom_name)
//   console.log(symptom_key);

  
//   // console.log(selected)

//  console.log(selecteds)

//   return(
//   <Autocomplete className="AutoCompleteBox"
//       // sx={{ m: 0.3, width: 400 }}
//       multiple
//       options={symptom_name}
//       getOptionLabel={(option) => option}
//       disableCloseOnSelect
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           value={selecteds}
//           onChange={(e) => setSelecteds(e.target.value)}
//           // variant="outlined"
//           label="Symptoms"
//           placeholder="Symptoms"
//         />
//       )}
//       renderOption={(props, option, { selected }) => (
//         <MenuItem
//           {...props}
//           key={option}
//           value={option}
//           sx={{ justifyContent: "space-between" }}
          
//         >
          
//           {option}
//           {selected ? <CheckIcon color="info" /> : null}
//         </MenuItem>
//       )}
//     />
//   );
// }

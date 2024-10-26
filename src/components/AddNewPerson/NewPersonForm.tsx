import React, { forwardRef, useImperativeHandle, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { departmentsArray } from "../../mockData";

interface FormValues {
  department?: string;
  team: string;
  personName?: string;
}

interface NewPersonFormRef {
  getformValues: () => FormValues;
}

const NewPersonForm = forwardRef<NewPersonFormRef, {}>((props, ref) => {
  const [formValues, setFormValues] = useState<FormValues>({ team: "Backend" });

  useImperativeHandle(ref, () => ({
    getformValues: () => formValues,
  }));

  const OnChangeSelect = (event: SelectChangeEvent<string>) => {
    //for deparment field
    setFormValues({
      ...formValues,
      department: event.target.value as string,
    });
  };
  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    //for team field
    setFormValues({
      ...formValues,
      team: (event.target as HTMLInputElement).value,
    });
  };
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    //for person field
    setFormValues({
      ...formValues,
      personName: (event.target as HTMLInputElement).value,
    });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <InputLabel id="departmentInput">Department</InputLabel>
        <Select
          labelId="departmentInput"
          value={formValues.department}
          label="Department"
          onChange={OnChangeSelect}>
          {departmentsArray[0].child.map((item) => (
            <MenuItem value={item.name}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={formValues.team}
          onChange={onChangeRadio}>
          <FormControlLabel
            value="Backend"
            control={<Radio />}
            label="Backend"
          />
          <FormControlLabel
            value="Frontend"
            control={<Radio />}
            label="Frontend"
          />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <TextField
          label="Person's Name"
          variant="outlined"
          size="small"
          onChange={onChangeText}
        />
      </FormControl>
    </Box>
  );
});
export default NewPersonForm;

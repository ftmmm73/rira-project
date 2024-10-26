import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewPersonForm from "./NewPersonForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
  bgcolor: "#e8eaf6",
  borderRadius: "4px",
  boxShadow: 24,
  p: 3,
};

interface Department {
  id: number;
  name: string;
  child?: Department[];
}

interface DepartmentProps {
  id: number;
  name: string;
  child: Department[] | any;
}

interface AddNewPersonProps {
  open: boolean;
  handleClose: () => void;
  departments: DepartmentProps[];
  setDepartments: (newDepartments: DepartmentProps[]) => void;
}

interface FormValues {
  department?: string;
  team: string;
  personName?: string;
}

interface FormRef {
  getformValues: () => FormValues;
}

const AddNewPerson: React.FC<AddNewPersonProps> = ({
  open,
  departments,
  setDepartments,
  handleClose,
}) => {
  const valuesRef = useRef<FormRef | null>(null);

  const handleAddPerson = () => {
    if (valuesRef.current) {
      const values = valuesRef.current.getformValues();
      if (!values.department) {
        //deprtment field validation
        alert("Please select a department");
      } else if (!values.personName) {
        //person field validation
        alert("Please fill in the person's name");
      } else {
        const updateList = departments[0].child.map((level2: Department) => {
          if (level2.name === values.department) {
            if (level2.child) {
              const child = level2.child.map((level3) => {
                if (level3.name === values.team) {
                  return {
                    ...level3,
                    child: [
                      ...(level3.child || []),
                      { id: Number("4" + Date.now()), name: values.personName },
                    ],
                  };
                }
                return level3;
              });
              return { ...level2, child };
            }
          }
          return level2;
        });
        setDepartments([
          {
            name: "CEO",
            id: 101,
            child: updateList,
          },
        ]);
        handleClose();
      }
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Add A New Persopn
        </Typography>
        <Typography sx={{ mt: 2 }}>
          To create a new Person, select the department and its relevant field
          of work.
        </Typography>
        <NewPersonForm ref={valuesRef} />
        <Box sx={{ textAlign: "right", mt: 3 }}>
          <Button variant="outlined" sx={{ mr: 1 }} onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddPerson}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default AddNewPerson;

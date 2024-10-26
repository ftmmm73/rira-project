import "./App.css";
import { departmentsArray } from "./mockData";
import DepartmentCard from "./components/departmentCard";
import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useState } from "react";
import AddNewPerson from "./components/AddNewPerson";

interface Department {
  id: number;
  name: string;
  child?: Department[];
}

interface DepartmentProps {
  id: number;
  name: string;
  child: Department[];
}

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [departments, setDepartments] =
    useState<DepartmentProps[]>(departmentsArray);
  const handleModal = (status: boolean) => setIsOpenModal(status);

  return (
    <div className="App">
      <Button
        variant="contained"
        startIcon={<ControlPointIcon />}
        sx={{ textTransform: "none" }}
        onClick={() => handleModal(true)}>
        Add a new Person
      </Button>
      <ul className="department-container">
        {departments.map((item) => (
          <DepartmentCard key={item.id} department={item} />
        ))}
      </ul>
      <AddNewPerson
        open={isOpenModal}
        handleClose={() => handleModal(false)}
        departments={departments}
        setDepartments={setDepartments}
      />
    </div>
  );
}

export default App;

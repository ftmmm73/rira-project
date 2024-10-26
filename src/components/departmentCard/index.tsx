import React from "react";

interface DepartmentProps {
  department: {
    id: number;
    name: string;
    child?: DepartmentProps["department"][];
  };
}

const DepartmentCard: React.FC<DepartmentProps> = React.memo(
  ({ department }) => {
    // Recursive function
    const renderChild = (child: DepartmentProps["department"]) => (
      <DepartmentCard key={child.id} department={child} />
    );

    return (
      <li className={`level-${department.id.toString().charAt(0)}`}>
        <div className="person-card">{department.name}</div>
        {department.child && <ul>{department.child.map(renderChild)}</ul>}
      </li>
    );
  }
);

export default DepartmentCard;

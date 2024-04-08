import { useState } from "react";
import users from "./users.json";
import DragArea from "./DragArea";
import DragItem from "./DragItem";
import { DragProvider } from "./DragContext";

type UserProps = {
  name: string;
  email: string;
  lastName: string;
};

const UserItem = ({ name, lastName, email }: UserProps) => {
  return (
    <li
      className="user-item"
      style={{
        display: "flex",
        alignItems: "centar",
        justifyContent: "space-between",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <span style={{ marginRight: "15px", fontWeight: "bold" }}>
        {name} {lastName}
      </span>
      <span style={{ color: "#555", fontStyle: "italic" }}>{email}</span>
    </li>
  );
};

export const DraggableUserList = () => {
  const [exampleUsers, setExampleUsers] = useState(users);

  return (
    <DragProvider>
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          <DragArea items={exampleUsers} onChange={setExampleUsers}>
            {exampleUsers.map((user, i) => (
              <DragItem key={user.id} index={i}>
                <UserItem
                  name={user.firstName}
                  email={user.email}
                  lastName={user.lastName}
                />
              </DragItem>
            ))}
          </DragArea>
        </ul>
      </div>
    </DragProvider>
  );
};

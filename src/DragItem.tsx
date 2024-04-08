// DragItem.tsx
import React, { ReactNode } from "react";
import { useDrag } from "./DragContext";

type DragItemProps = {
  index: number;
  children: ReactNode;
};

const DragItem: React.FC<DragItemProps> = ({ children, index }) => {
  const { setDraggedItem, targetIndex, setTargetIndex } = useDrag();

  const handleDragStart = (e: React.DragEvent) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    const overItemIndex = Number(e.currentTarget.getAttribute("data-index"));
    if (targetIndex !== overItemIndex) {
      setTargetIndex(overItemIndex);
    }
  };

  return (
    <div
      draggable
      data-index={index}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      style={{
        margin: "10px 0",
        cursor: "move",
        backgroundColor: "#f9f9f9",
        padding: "10px",
        borderRadius: "4px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
};

export default DragItem;

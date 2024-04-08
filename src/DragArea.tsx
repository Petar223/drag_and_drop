// DragArea.tsx
import React, { ReactNode, useRef } from "react";
import { useDrag } from "./DragContext";

type DragAreaProps = {
  onChange: (items: any[]) => void;
  items: any[];
  children: ReactNode;
};

const DragArea: React.FC<DragAreaProps> = ({ children, onChange, items }) => {
  const { draggedItem, setDraggedItem, targetIndex, setTargetIndex } =
    useDrag();
  const dragAreaRef = useRef<HTMLUListElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (
      draggedItem !== null &&
      targetIndex !== null &&
      draggedItem !== targetIndex
    ) {
      const newItems = [...items];
      const itemToMove = newItems.splice(draggedItem, 1)[0];
      newItems.splice(targetIndex, 0, itemToMove);

      console.log(targetIndex);
      onChange(newItems);
      setDraggedItem(null);
      setTargetIndex(-1);
    }
  };

  

  return (
    <div
      onDrop={handleDrop}
      style={{
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
};

export default DragArea;

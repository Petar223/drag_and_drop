import React, { ReactNode, createContext, useContext, useState } from "react";

type DragContextType = {
  draggedItem: any;
  setDraggedItem: (item: any) => void;
  targetIndex: number;
  setTargetIndex: (item: any) => void;
};

const DragContext = createContext<DragContextType | undefined>(undefined);

export const DragProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [draggedItem, setDraggedItem] = useState<any>(null);
  const [targetIndex, setTargetIndex] = useState(-1);

  const value = { draggedItem, setDraggedItem, targetIndex, setTargetIndex };

  return <DragContext.Provider value={value}>{children}</DragContext.Provider>;
};

export const useDrag = () => {
  const context = useContext(DragContext);
  if (context === undefined) {
    throw new Error("useDrag must be used within a DragProvider");
  }
  return context;
};

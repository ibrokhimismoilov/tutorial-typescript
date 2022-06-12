import React from "react";

type ListObjType<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const ListObj = <T extends { id: number }>({
  items,
  onClick,
}: ListObjType<T>) => {
  return (
    <div>
      <h2>List of types</h2>

      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

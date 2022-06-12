import React from "react";

type ListType = {
  items: string[] | number[];
  onClick: (value: string | number) => void;
};

export const List = ({ items, onClick }: ListType) => {
  return (
    <div>
      <h2>List of types</h2>

      {items.map((item, idx) => {
        return (
          <div key={idx} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

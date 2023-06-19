import { SquaresListType } from "../model";

export const List = ({ list }: SquaresListType) => (
  <>
    {list.map((item) => (
      <div className="square" key={`square-${item.id}`} data-testid={`square-${item.id}`} style={{ ...item.zone }} />
    ))}
  </>
);

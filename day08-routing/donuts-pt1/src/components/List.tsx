import Donut from "../models/Donut";
import Item from "./Item";
import "./List.css";

interface Props {
  donuts: Donut[];
}

const List = ({ donuts }: Props) => {
  return (
    <ul className="List">
      {donuts.map((item) => (
        <Item key={item.id} donut={item} />
      ))}
    </ul>
  );
};

export default List;

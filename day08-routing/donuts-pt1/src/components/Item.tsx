import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Donut from "../models/Donut";
import "./Item.css";

interface Props {
  donut?: Donut;
}

const Item = ({ donut }: Props) => {
  const id: string | undefined = useParams().id;
  const [singleDonut, setSingleDonut] = useState<Donut | undefined>(donut);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setSingleDonut(res);
        })
        .catch(() => navigate("/"));
    }
  }, [id]);

  return (
    <div className="Item">
      <Link to={`/details/${singleDonut?.id}`}>
        <p>{singleDonut?.name}</p>
        <p>{singleDonut?.calories}</p>
        <img src={singleDonut?.photo} alt="" />
        {id && <button>Add to Cart</button>}
      </Link>
    </div>
  );
};

export default Item;

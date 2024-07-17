import { useEffect, useState } from "react";
import { getCampers } from "../../services/advetrs";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";

const CatalogList = () => {
  const [campers, setCampers] = useState([]);
  console.log("campers: ", campers);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const camper = await getCampers();
        setCampers(camper);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <ul className={css.catalog}>
        {campers &&
          campers.map(
            ({
              id,
              gallery,
              name,
              rating,
              location,
              description,
              adults,
              transmission,
              engine,
              details,
              reviews,
              price,
            }) => (
              <li className={css.catalogItem} key={id}>
                <CatalogItem
                  src={gallery[0]}
                  name={name}
                  rating={rating}
                  location={location}
                  description={description}
                  adults={adults}
                  transmission={transmission}
                  engine={engine}
                  kitchen={details.kitchen}
                  bathroom={details.bathroom}
                  beds={details.beds}
                  reviews={reviews.length}
                  price={price}
                  ac={details.airConditioner}
                />
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default CatalogList;

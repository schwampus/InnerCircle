import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/joy";
import Avatar from "../components/Avatar";
import { useEffect, useState } from "react";

export default function Category() {
  const { categoryName } = useParams();
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    fetch(`/api/categories/${categoryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCircles(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching circle-data:", error);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <h1 className="text-3xl mt-12 mb-4 font-climate justify-center items-center text-center font-bold text-(--purple-white) font-kanit drop-shadow-[3px_3px_3px_var(--purple-dark)]">
          Athletes in {categoryName.toUpperCase()}
        </h1>
        <div className="flex flex-row flex-wrap justify-center p-4 gap-4 my-8">
          {circles && circles.length > 0 ? (
            circles.map((athlete) => {
              return (
                <Link
                  key={athlete.circle_name}
                  to={`/circle/${athlete.circle_id}/${athlete.circle_slug}`}
                >
                  <div className=" flex flex-col justify-center items-center w-64 h-64 mx-auto mb-4">
                    <Avatar
                      src={athlete.circle_avatar}
                      name={athlete.circle_name}
                      alt={athlete.circle_name}
                      variant="large"
                    />
                    <h2 className="  font-bold font-kanit text-(--orange-main) text-2xl z-10 drop-shadow-[1px_5px_4px_var(--purple-dark)]">
                      {athlete.circle_name}
                    </h2>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>no athletes found.</p>
          )}
        </div>
      </div>
    </>
  );
}

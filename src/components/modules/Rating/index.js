import React from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({ rate }) {
  return (
    <>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <FaStar
            key={index.toString()}
            color={
              givenRating < rate || givenRating === rate
                ? "000"
                : "rgb(192,192,192)"
            }
          />
        );
      })}
    </>
  );
}

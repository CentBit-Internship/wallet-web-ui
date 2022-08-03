import React from "react";

import * as S from "./styles";


const allMonths = [
  {
    title: "Month",
  },
  {
    title: "Jan",
  },
  {
    title: "Feb",
  },
  {
    title: "Mar",
  },
  {
    title: "Apr",
  },
  {
    title: "May",
  },
  {
    title: "Jun",
  },
  {
    title: "Jul",
  },
  {
    title: "Aug",
  },
  {
    title: "Sep",
  },
  {
    title: "Oct",
  },
  {
    title: "Nov",
  },
  {
    title: "Dec",
  },
];

export function Months() {
  return (
    <>
      <form action="">
        <S.Month name="cars" id="cars">
          {allMonths.map((item) => 
            <option key={item.title} value={item.title}>{item.title}
            </option>
          )}
        </S.Month>
      </form>
    </>
  );
}

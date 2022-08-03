import React, { useEffect } from 'react';
import { SingleCard, SingleCardProps } from "../singleCard/SingleCard";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";
import { GrUpgrade } from "react-icons/gr";
import {  GiCardBurn } from "react-icons/gi";
import { BiTrendingDown } from "react-icons/bi"

import * as S from "./styles";


const totalData: SingleCardProps[] = [
  {
    title: "Total Sales",
    titleIcon: <BsCreditCard2Back />,
    value: 4878.98,
    valueIcon: <AiOutlineRise />,
    backgroundColor: "#daeaf0"
  },
  {
    title: "Total Profit",
    titleIcon: <GrUpgrade />,
    value: 762.10,
    valueIcon: <BiTrendingDown />,
    backgroundColor: "#e3f49a"
  },
  {
    title: "total Orders",
    titleIcon: <GiCardBurn />,
    value: 1056,
    valueIcon: <AiOutlineRise />,
    backgroundColor: "#dcd2ee"
  }
];

export function Cards() {
  return (
    <>
      <S.CardsCon>
        {totalData.map((item) => 
        <SingleCard
          key={item.title}
          title={item.title}
          titleIcon={item.titleIcon}
          value={item.value}
          valueIcon={item.valueIcon}
          backgroundColor={item.backgroundColor}
        />
        )}
      </S.CardsCon>
    </>
  );
};


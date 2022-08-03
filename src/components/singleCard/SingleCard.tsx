import React, { useEffect, useState } from "react";

import * as S from "./styles";

export type SingleCardProps = {
  title: string;
  value: number;
  titleIcon: React.ReactNode;
  valueIcon: React.ReactNode;
  backgroundColor: string;
}

export function SingleCard({ title, value, titleIcon, valueIcon, backgroundColor}: SingleCardProps) {
  const [val, setVal] = useState(100);
  const formatValue = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val); 
  };

  useEffect(() => {
    const id = setInterval(() => {
      setVal((val) => {
        if (val >= Math.floor(value)) {
          clearInterval(id);
          return value;
        }
        return val + 10;
      });
    }, 1);
  }, []);

  return (
    <>
      <S.Card backgroundColor={backgroundColor}>
        <S.CardsProperties>

          <S.IconDiv>
            <S.Iconn> {titleIcon} </S.Iconn>
          </S.IconDiv>
          <S.TotalSales> {title} </S.TotalSales>
        </S.CardsProperties>

        <S.CardsProperties>
        <S.Amount> {formatValue(val)} </S.Amount>
        <S.AmountIconDiv>
            <S.Iconn> {valueIcon} </S.Iconn>
          </S.AmountIconDiv>

        </S.CardsProperties>
      </S.Card>
    </>
  );
}

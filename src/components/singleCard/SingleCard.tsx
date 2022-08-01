import React from "react";

import * as S from "./styles";

export type SingleCardProps = {
  title: string;
  value: number;
  titleIcon: React.ReactNode;
  valueIcon: React.ReactNode;
  backgroundColor: string;
}

export function SingleCard({ title, value, titleIcon, valueIcon, backgroundColor}: SingleCardProps) {
  const formatValue = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val); 
  };

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
        <S.Amount> {formatValue(value)} </S.Amount>
        <S.AmountIconDiv>
            <S.Iconn> {valueIcon} </S.Iconn>
          </S.AmountIconDiv>

        </S.CardsProperties>
      </S.Card>
    </>
  );
}

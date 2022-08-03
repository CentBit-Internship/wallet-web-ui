import React from 'react'

import * as S from "./styles";

export type SingleSalesPGProps = {
  backgroundColor: string;
  title: string;
}


export function SingleSalesPG({backgroundColor, title}: SingleSalesPGProps) {
  return (
    <S.SalesAndDotDiv>
      <S.Dot backgroundColor= {backgroundColor} ></S.Dot>
      <S.Sales> {title} </S.Sales>
    </S.SalesAndDotDiv>
  )
}

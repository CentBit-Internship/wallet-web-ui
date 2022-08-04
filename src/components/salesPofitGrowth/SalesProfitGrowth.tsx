import React from 'react'
import { SingleSalesPG, SingleSalesPGProps } from "../singleSalesPG/SingleSalesPG";

import * as S from "./styles";

const data: SingleSalesPGProps[] = [
    {
        backgroundColor: "#232323;",
        title: "Sales"
    },
    {
        backgroundColor: "#b9e31c",
        title: "Profit"
    },
    {
        backgroundColor: "#b5d5e1",
        title: "Growth"
    }
]

export function SalesProfitGrowth() {
  return (
    <S.SalesProfitGrowthDiv>
        {data.map((item) =>
        <SingleSalesPG
        key={item.title}
        backgroundColor={item.backgroundColor}
        title={item.title}
        />
        )}
    </S.SalesProfitGrowthDiv>
  )
}


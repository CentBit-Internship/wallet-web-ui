import React from 'react'

import * as S from "./styles";

export type MonthsProps = {
    title: string;
    value: string;
}

export function Months({title, value}: MonthsProps) {
  return (
    <div> 
        <form action="/action_page.php">
    <S.Month name="cars" id="cars">
      <option value="volvo">title</option>
      <option value="saab">value</option>
      {/* <option value="opel">Feb</option>
      <option value="audi">Mar</option> */}
    </S.Month>
  </form>
  </div>
  )
}
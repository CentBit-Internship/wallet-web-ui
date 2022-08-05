import styled from "styled-components";

export { Month } from "../months/styles";


export const EarningContainer = styled.div`
background: #fff;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
width: 280px;
height: 95%;
color: #232323;
margin-top: 2px;
border-radius: 10px;
font-family: "Poppins";
`;

export const EarningsAndMonthsDiv = styled.div`
height: 50px;
width: 280px;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Earning = styled.p`
font-size: 18px;
color:  #232323;
font-weight: 600;
margin-top: 2rem;
margin-right: 2rem;
font-family: 'Poppins', sans-serif;
`;

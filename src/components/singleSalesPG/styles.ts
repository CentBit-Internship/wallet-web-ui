import styled from "styled-components";

export const SalesAndDotDiv = styled.div`
height: 35px;
width: 90px;
display: flex;
align-items: center;
justify-content: end;
`;

export const Dot = styled.div<{backgroundColor: string}>`
height: 10px;
width: 10px;
border-radius: 5px;
margin-right: 5px;
background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Sales = styled.span`
font-size: 16px;
font-family: 'Poppins', sans-serif;
color:  #232323;
font-weight: 400;
`;
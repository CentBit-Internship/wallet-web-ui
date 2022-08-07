import styled from "styled-components";

export const SalesAndDotDiv = styled.div`
height: 35px;
width: 90px;
display: flex;
align-items: center;
justify-content: end;
margin-bottom: 2rem;
`;

export const Dot = styled.div<{backgroundColor: string}>`
height: 10px;
width: 10px;
border-radius: 5px;
margin-right: 7px;
background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Sales = styled.span`
font-size: 13px;
font-family: 'Poppins', sans-serif;
color:  #232323;
font-weight: 600;
margin-right: 1rem;
`;
import styled, { css } from "styled-components";


export const Card = styled.div<{backgroundColor: string}>`
height: 150px;
width: 250px;
border-radius: 15px;
margin-left: 2.5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const CardsProperties = styled.div`
height: 60px;
width: 220px;
display: flex;
align-items: center;
`;

export const IconDiv = styled.div`
height: 50px;
width: 50px;
background: white;
margin-left: 1rem;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Iconn = styled.i`
font-size: 25px;
`;

export const TotalSales = styled.p`
font-size: 16px;
color:  #232323;
margin-left: 1.2rem;
font-weight: 600;
font-family: 'Poppins', sans-serif;
`;

export const Amount = styled.p`
font-size: 25px;
color:  #232323;
margin-left: 1rem;
font-weight: 600;
font-family: 'Poppins', sans-serif;
`;

export const AmountIconDiv =  styled.div`
height: 50px;
width: 50px;
margin-left: 2.5rem;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`;





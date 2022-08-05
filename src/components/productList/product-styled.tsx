import styled from "styled-components";
import React from 'react';

export const ProductListContainer = styled.div`
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  width: 814px;
  max-width: 100%;
  margin: 0.7rem auto;
  border-radius: 5px;
  margin-left: 2.5rem;
  box-shadow: rgba(0, 0, 0, 0.10) 0px 1px 4px;
`;
export const ProductListHeader = styled.h6`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.2rem;
  margin-left: 1.5rem;
  padding:1rem .3rem;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TBody = styled.tbody`
`
export const THead = styled.th`
  font-family: "Poppins", sans-serif;
  padding: 25px 30px 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #fefdfd;
  color: rgb(37, 36, 36);
`;

export const TData = styled.td`
  font-family: "Poppins", sans-serif;
  padding: 25px 30px 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  font-weight:600
`;
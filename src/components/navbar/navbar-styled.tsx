import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0.7rem;
  align-items: center;
  margin:0 auto;

  font-family:'Poppins';


`;
export const NavHeader = styled.h2`

  font-family: "Poppins";
  font-weight:700;
  font-size:2rem;
  margin-left:1.5rem
`;
export const NavbarInputs = styled.div`

`;
export const SearchInput = styled.input`
  padding: 10px 15px;
  border-radius: 0.2rem;
  border: 0;
  background-color: #e8e8e8;
  width: 100%;


  &: focus {
    outline: 0;
  }
  &:: placeholder {
    font-size: 1.1rem;
    color: #696969;
    padding: 5px;
    font-weight:500;
  }
`;

export const Inputs = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

`;
export const SearchField = styled.div`
  position: relative;
`;

export const ShareInsight = styled.input`
width:30%;
  padding: 10px 10px;
  border-radius: 0.2rem;
  border: 0;
  background-color: #181818;

  &: focus {
    outline: 0;
  }
  &:: placeholder {
    font-size: 1rem;
    color: #fff;
    padding: 5px;
    text-align: center;
  }
`;

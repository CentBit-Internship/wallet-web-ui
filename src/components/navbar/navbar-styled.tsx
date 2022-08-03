import styled from "styled-components";

export const NavbarContainer = styled.div`

  width: 70%;
  max-width: 100%;
  margin-left: 28%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.7rem;
  align-items: center;
  position:absolute;
`;
export const NavbarInputs = styled.div`
  display: inline-block;
`;
export const SearchInput = styled.input`
  border: 2px solid red;
  padding: 13px 15px;
  border-radius: 0.4rem;
  border: 0;
  background-color: #e8e8e8;
  width: 85%;


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
  padding: 13px 10px;
  border-radius: 0.4rem;
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

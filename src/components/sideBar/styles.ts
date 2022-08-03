import styled from "styled-components";


export const BlackBackground = styled.div`
  background: #232323;
  width: 25%;
  height: 1000px;

  width: 250px;
  height: 100%;
`;

export const AngelaGreyDiv = styled.div`
  height: 250px;
  width: 100%;
`;

export const ThumbImage = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 3rem;
  margin-left: 2rem;
  border-radius: 10px;
`;

export const AngelaGrey = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 600;
  margin-left: 2rem;
  font-family: 'Poppins', sans-serif;
`;

export const EmailAddress = styled.p`
  font-size: 12px;
  color: white;
  margin-left: 2rem;
  font-family: 'Poppins', sans-serif;
`;

export const ListContainer = styled.div`
  height: 300px;
  width: 100%;
`;

export const List = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover > * {
    color: white;
  }
`;

export const ListIcon = styled.i`
  margin-left: 2rem;
  color: #989898;
`;

export const ListItems = styled.p`
  font-size: 15px;
  color: #989898;
  margin-left: 1rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

export const Raibowlike = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
`;

export const RainbowlikeIcon = styled.i`
  font-size: 100px;
  width: 100%;
  margin-left: 3rem;
  margin-top: 3rem;
  color: grey;
  & svg {
    transform: rotate(100deg);
  }
`;

export const LogoutCon = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;
  &:hover > * {
    color: white;
  }
`;

export const Logout = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #989898;
  margin-left: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const LogoutIcon = styled.i`
  color: #989898;
  font-size: 23px;
  margin-left: 2rem;
`;

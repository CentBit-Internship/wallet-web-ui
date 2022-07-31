import styled from "styled-components";




export const Container = styled.div`
  background: white;
`;

export const TheBackground = styled.div`
  background: #232323;
  width: 25%;
  height: 1000px;
`;

export const AngelaGreyDiv = styled.div`
  height: 250px;
  width: 100%;
`;

export const ThumbImage = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 3rem;
  margin-left: 4rem;
  border-radius: 10px;
`;

export const AngelaGrey = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 800;
  margin-left: 4rem;
  font-family: "Ubuntu", sans-serif;
`;

export const EmailAddress = styled.p`
  font-size: 12px;
  color: white;
  margin-left: 4rem;
  font-family: "Ubuntu", sans-serif;
`;

export const ListContainer = styled.div`
  height: 310px;
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
  margin-left: 4rem;
  color: #989898;
`;

export const ListItems = styled.p`
  font-size: 16px;
  color: grey;
  margin-left: 1rem;
  font-weight: 600;
`;

export const Raibowlike = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 3rem;
  display: flex;
  align-items: center;
`;

export const RainbowlikeIcon = styled.i`
  font-size: 220px;
  color: grey;
  margin-left: 3rem;
  margin-top: 3rem;
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
  color: grey;
  margin-left: 1rem;
`;

export const LogoutIcon = styled.i`
  color: #989898;
  font-size: 23px;
  margin-left: 4rem;
`;

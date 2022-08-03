import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { MdGridView, MdLogout } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { BsFillPeopleFill, BsRainbow } from "react-icons/bs";
import { RiQuestionFill } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import ThumbImg from "../../assets/thumbImg.png";
// import { TheBackground } from "./styles";
import * as S from "./styles";

export function NavBar() {
  return (
    <>
      <S.Container>
        <S.TheBackground>
          <S.AngelaGreyDiv>
            <S.ThumbImage src={ThumbImg}></S.ThumbImage>
            <S.AngelaGrey>Angela Grey</S.AngelaGrey>
            <S.EmailAddress>angela@gmail.com</S.EmailAddress>
          </S.AngelaGreyDiv>

          <S.ListContainer>
            <S.List>
              <S.ListIcon> <MdGridView /> </S.ListIcon>
              <S.ListItems>Overview</S.ListItems>
            </S.List>
            <S.List>
              <S.ListIcon> <IoAnalyticsSharp /> </S.ListIcon>
              <S.ListItems>Analytics</S.ListItems>
            </S.List>
            <S.List>
              <S.ListIcon> <BsFillPeopleFill /> </S.ListIcon>
              <S.ListItems>Customers</S.ListItems>
            </S.List>
            <S.List>
              <S.ListIcon> <FaRegCalendar /> </S.ListIcon>
              <S.ListItems>Calender</S.ListItems>
            </S.List>
            <S.List>
              <S.ListIcon> <RiQuestionFill /> </S.ListIcon>
              <S.ListItems>Support</S.ListItems>
            </S.List>
            <S.List>
              <S.ListIcon> <TbSettings /> </S.ListIcon>
              <S.ListItems>Settings</S.ListItems>
            </S.List>
          </S.ListContainer>

          <S.Raibowlike>
            <S.RainbowlikeIcon> <BsRainbow/> </S.RainbowlikeIcon>
          </S.Raibowlike>

          <S.LogoutCon>
            <S.LogoutIcon><MdLogout /></S.LogoutIcon>
            <S.Logout>Logout</S.Logout>
          </S.LogoutCon>

        </S.TheBackground>
      </S.Container>
    </>
  );
}

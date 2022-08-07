import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import {
  NavbarContainer,
  NavbarInputs,
  SearchInput,
  Inputs,
  SearchField,
  ShareInsight,
  NavHeader,
 

} from "./navbar-styled";
import { useState } from "react";

const OverviewNav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = ()=>{
    setIsOpen(isOpen)
  }
  return (
    <header>
      <NavbarContainer>
        <NavHeader>Overview</NavHeader>
        <NavbarInputs>
          <form>
            <Inputs>
              <SearchField>
                <SearchInput type="text" placeholder="Search" />
                <BiSearch
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "6px",
                    fontSize: 35,
                    color: " #696969",
                    padding: "0 8px 0 0",
                    fontWeight: "700",
                  }}
                />
              </SearchField>
              <FaBell
                style={{
                  borderRadius: "0.4rem",
                  fontSize: "2.7rem",
                  backgroundColor: "#e8e8e8",
                  padding: "10px 15px",
                  zIndex: 1000,
                  fontWeight: "700",
                }}
              />
              <ShareInsight type="text" placeholder="Share Insights" />
            </Inputs>
          </form>
        </NavbarInputs>
      </NavbarContainer>
    </header>
  );
};

export default OverviewNav;

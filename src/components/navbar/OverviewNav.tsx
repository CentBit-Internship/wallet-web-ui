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
} from "./navbar-styled";

const OverviewNav = () => {
  return (
    <header>
      <NavbarContainer>
        <h2>Overview</h2>
        <NavbarInputs>
          <form>
            <Inputs>
              <SearchField>
                <SearchInput type="text" placeholder="search" />
                <BiSearch
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "8px",
                    fontSize: 25,
                    color: " #696969",
                    padding: "0 8px 0 0",
                  }}
                />
              </SearchField>
              <FaBell
                style={{
                  backgroundColor: " #e8e8e8",
                  padding: "13px 15px",
                  borderRadius: "0.4rem",
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

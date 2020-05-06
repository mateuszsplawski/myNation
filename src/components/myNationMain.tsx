import React from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation/Navigation";
import DisplaySection from "./DisplaySection/DisplaySection";

const Main = styled.main``;

export const MyNationMain = () => {
  return (
    <Main>
      <Navigation />
      <DisplaySection />
    </Main>
  );
};
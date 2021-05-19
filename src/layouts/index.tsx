import { useState, ReactNode, ReactNodeArray } from "react";
import styled from "styled-components";

import { GREY, WHITE } from "@colors";
import GlobalHeader from "./header";
import GlobalSidebar from "./sidebar";

type LayoutProps = {
  children: ReactNode | ReactNodeArray;
};

export default function GlobalLayout({ children }: LayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <GlobalSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <GreyBackground>
        <MainWrapper>
          <GlobalHeader toggleSidebar={toggleSidebar} />
          {children}
        </MainWrapper>
      </GreyBackground>
    </>
  );
}

const GreyBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${GREY[200]};
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 425px;
  min-height: 100vh;
  background-color: ${WHITE};
  position: relative;
`;

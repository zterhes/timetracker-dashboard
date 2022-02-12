import React from "react";
import { styled } from "./theme";

const TestText = styled.p`
  color: ${(props) => props.theme.colors.primary.lightRedStudy};

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    color: ${(props) => props.theme.colors.neutral.darkBlue};
  }
`;

function DashboardPage() {
  return <TestText>Hello</TestText>;
}

export default DashboardPage;

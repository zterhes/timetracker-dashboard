import React from "react";
import { styled } from "./theme";
import data from "./constants/data.json";
import User from "./components/User";

const TestText = styled.p`
  color: ${(props) => props.theme.colors.primary.lightRedStudy};

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    color: ${(props) => props.theme.colors.neutral.darkBlue};
  }
`;

const Page = styled.div`
  background-color: ${(props) => props.theme.colors.neutral.veryDarkBlue};
  padding: 25px 5px;
  min-height: 100vh;
`;

function DashboardPage() {
  return (
    <Page>
      <User
        name={data.userdata.name}
        imgSrc={process.env.PUBLIC_URL + "/images/" + data.userdata.img}
      />
    </Page>
  );
}

export default DashboardPage;

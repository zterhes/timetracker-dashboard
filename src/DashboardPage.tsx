import React from "react";
import { styled, theme } from "./theme";
import data from "./constants/data.json";
import User from "./components/User";
import DataCard from "./components/DataCard";

const Page = styled.div`
  background-color: ${(props) => props.theme.colors.neutral.veryDarkBlue};
  padding: 45px 25px;
  min-height: 100vh;
`;

function DashboardPage() {
  return (
    <Page>
      <User
        name={data.userdata.name}
        imgSrc={process.env.PUBLIC_URL + "/images/" + data.userdata.img}
      />
      <DataCard
        bgColor={theme.colors.primary.lightRedWork}
        icon="work"
        title="Work"
      />
    </Page>
  );
}

export default DashboardPage;

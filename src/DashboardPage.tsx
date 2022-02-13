import React from "react";
import { styled, theme } from "./theme";
import data from "./constants/data.json";
import User from "./components/User";
import DataCard from "./components/DataCard";
import TimeFrames from "./types/TimeFrames";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 25px;
  gap: 25px;
  max-width: 1000px;
  margin: auto;
  ${(props) => props.theme.media.desktop} {
    flex-direction: row;
  }
`;

const CardContainer = styled.div`
  display: grid;
  column-gap: 25px;
  row-gap: 25px;
  ${(props) => props.theme.media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-auto-rows: max-content;
  }
`;

function enumFromStringValue<T>(
  enm: { [s: string]: T },
  value: string
): T | undefined {
  return (Object.values(enm) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : undefined;
}

function DashboardPage() {
  return (
    <Page>
      <User
        name={data.userdata.name}
        imgSrc={process.env.PUBLIC_URL + "/images/" + data.userdata.img}
      />
      <CardContainer>
        {data.timeTypes.map((types) => (
          <DataCard
            bgColor={types.style.color}
            icon={types.style.icon}
            title={types.title}
            timeFrame={
              enumFromStringValue(TimeFrames, "daily") || TimeFrames.DAILY
            }
            currentValue={types.timeframes.daily.current}
            previousValue={types.timeframes.daily.previous}
          />
        ))}
      </CardContainer>
    </Page>
  );
}

export default DashboardPage;

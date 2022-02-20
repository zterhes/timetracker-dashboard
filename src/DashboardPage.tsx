import React, { useContext, useState } from "react";
import { styled, theme } from "./theme";
import data from "./constants/data.json";
import User from "./components/User";
import DataCard from "./components/DataCard";
import TimeFrames, { enumFromStringValue } from "./types/TimeFrames";
import TImeframeContext from "./context/TImeframeContext";

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

interface TimeFrameData {
  current: number;
  previous: number;
}

interface TimeFrameInputData {
  daily: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
}
const findDataByTimeFrame = (
  timeFrame: TimeFrames,
  types: TimeFrameInputData
): TimeFrameData => {
  const data: TimeFrameData = { current: 0, previous: 0 };
  if (timeFrame === TimeFrames.DAILY) {
    data.current = types.daily.current;
    data.previous = types.daily.previous;
  }
  if (timeFrame === TimeFrames.WEEKLY) {
    data.current = types.weekly.current;
    data.previous = types.weekly.previous;
  }
  if (timeFrame === TimeFrames.MONTHLY) {
    data.current = types.monthly.current;
    data.previous = types.monthly.previous;
  }
  return data;
};

function DashboardPage() {
  const [timeFrame, setTimeFrame] = useState(TimeFrames.DAILY);

  return (
    <TImeframeContext.Provider value={{ timeFrame, setTimeFrame }}>
      <Page>
        <User
          name={data.userdata.name}
          imgSrc={process.env.PUBLIC_URL + "/images/" + data.userdata.img}
        />
        <CardContainer>
          {data.timeTypes.map((types) => {
            const data = findDataByTimeFrame(timeFrame, types.timeframes);
            return (
              <DataCard
                bgColor={types.style.color}
                icon={types.style.icon}
                title={types.title}
                timeFrame={timeFrame}
                currentValue={types.timeframes[timeFrame].current}
                previousValue={data.previous}
              />
            );
          })}
        </CardContainer>
      </Page>
    </TImeframeContext.Provider>
  );
}

export default DashboardPage;

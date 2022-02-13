import React from "react";
import { styled } from "../theme";
import TimeFrames from "../types/TimeFrames";
import Container from "./Container";
import Typography from "./Typography";

interface DataCardWrapperProps {
  bgColor: string;
  icon: string;
}

const DataCardWrapper = styled.div<DataCardWrapperProps>`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.bgColor};
  padding-top: 40px;
  background-image: url(/images/${(props) => props.icon});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 15px);
  background-position-y: -8px px;
`;

const DataContainer = styled(Container)`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.neutral.darkBlue};
  :hover {
    background-color: ${(props) => props.theme.colors.primary.blue};
  }
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: white;
    font-weight: ${(props) => props.theme.typography.weights.sm};
  }
  ${props=>props.theme.media.desktop}{
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled(Typography)`
  font-weight: ${(props) => props.theme.typography.weights.lg};
`;


interface DataCardProps extends DataCardWrapperProps {
  title: string;
  currentValue: number;
  previousValue: number;
  timeFrame: TimeFrames;
}




const stringByTimeframe = (
  previousValue: number,
  timeFrame: TimeFrames
): string => {
  if (timeFrame === TimeFrames.DAILY) {
    return `Yesterday - ${previousValue}hrs`;
  } else if (timeFrame === TimeFrames.WEEKLY) {
    return `Last Week - ${previousValue}hrs`;
  }
  return `Last Month - ${previousValue}hrs`;
};

const DataCard: React.FC<DataCardProps> = ({
  title,
  timeFrame,
  currentValue,
  previousValue,
  ...rest
}) => {
  return (
    <DataCardWrapper {...rest}>
      <DataContainer>
        <TitleRow>
          <Title>{title}</Title>
          <img
            src="/images/icon-ellipsis.svg"
            alt="ellipsis icon"
            title="ellipsis icon"
          />
        </TitleRow>
        <DataRow>
          <h2>{currentValue}hrs</h2>
          <Typography>{stringByTimeframe(previousValue,timeFrame)}</Typography>
        </DataRow>
      </DataContainer>
    </DataCardWrapper>
  );
};

export default DataCard;

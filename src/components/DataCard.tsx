import React from "react";
import { styled } from "../theme";
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
  background-image: url(/images/icon-${(props) => props.icon}.svg);
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
`;

interface DataCardProps extends DataCardWrapperProps {
  title: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, ...rest }) => {
  return (
    <DataCardWrapper {...rest}>
      <DataContainer>
        <TitleRow>
          <Typography>{title}</Typography>
          <img
            src="/images/icon-ellipsis.svg"
            alt="ellipsis icon"
            title="ellipsis icon"
          />
        </TitleRow>
        <DataRow></DataRow>
      </DataContainer>
    </DataCardWrapper>
  );
};

export default DataCard;

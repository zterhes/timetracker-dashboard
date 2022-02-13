import React from "react";
import { styled } from "../theme";
import Button from "./Button";
import Container from "./Container";
import Typography from "./Typography";

interface Props {
  imgSrc: string;
  name: string;
}

const ComponentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.neutral.darkBlue};
  border-radius: ${(props) => props.theme.borderRadius};

  ${(props) => props.theme.media.desktop} {
    display: grid;
    grid-template-rows: auto max-content;
  }
`;

const ProfileWrapper = styled(Container)`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary.blue};
  border-radius: ${(props) => props.theme.borderRadius};

  ${(props) => props.theme.media.desktop} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TimeframeSelectorWrapper = styled(Container)`
  display: flex;
  justify-content: space-evenly;

  ${(props) => props.theme.media.desktop} {
    display: grid;
    justify-content: flex-start;
    row-gap: 25px;
  }
`;

const ProfileImg = styled.img`
  border-radius: 100%;
  height: 70px;
  width: 70px;
  border: 5px solid white;
  margin-right: 25px;

  ${(props) => props.theme.media.desktop} {
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

const NameDiv = styled.div`
  h2 {
    font-weight: ${(props) => props.theme.typography.weights.md};
    color: white;
  }
  p {
    font-weight: ${(props) => props.theme.typography.weights.sm};
  }

  h2,
  p {
    margin: 0;
  }
`;

const TimeframeSelectorButton = styled(Button)<{ active?: boolean }>`
  color: ${(props) =>
    props.active ? "white" : props.theme.colors.primary.blue};

  text-align: left;
`;

const User: React.FC<Props> = ({ name, imgSrc }) => {
  return (
    <ComponentWrapper>
      <ProfileWrapper>
        <ProfileImg
          src={imgSrc}
          alt="Profile image"
          title={"Image of " + name}
        />
        <NameDiv>
          <Typography>Report for</Typography>
          <h2>{name}</h2>
        </NameDiv>
      </ProfileWrapper>
      <TimeframeSelectorWrapper>
        <TimeframeSelectorButton>Daily</TimeframeSelectorButton>
        <TimeframeSelectorButton active>Weekly</TimeframeSelectorButton>
        <TimeframeSelectorButton>Monthly</TimeframeSelectorButton>
      </TimeframeSelectorWrapper>
    </ComponentWrapper>
  );
};

export default User;

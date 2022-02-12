import React from "react";
import { styled } from "../theme";

interface Props {
  imgSrc: string;
  name: string;
}

const ComponentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.neutral.darkBlue};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary.blue};
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  padding: 15px 25px;
`;

const TimeframeSelectorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
`;

const ProfileImg = styled.img`
  border-radius: 100%;
  height: 70px;
  width: 70px;
  border: 5px solid white;
  margin-right: 25px;
`;

const NameDiv = styled.div`
  h2 {
    font-weight: ${(props) => props.theme.typography.weights.md};
  }
  p {
    font-weight: ${(props) => props.theme.typography.weights.sm};
  }

  h2,
  p {
    margin: 0;
  }
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
          <p>Report for</p>
          <h2>{name}</h2>
        </NameDiv>
      </ProfileWrapper>
      <TimeframeSelectorWrapper>
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </TimeframeSelectorWrapper>
    </ComponentWrapper>
  );
};

export default User;

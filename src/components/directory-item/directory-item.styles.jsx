import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-image: ${({ imageurl }) => `url(${imageurl})`};

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const ItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  filter: grayscale(50%);

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);

      //remove grayscale filter on hover with soft fade in
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }

    filter: grayscale(0);
    transition: filter 0.5s;
  }

  &:not(:hover) ${BackgroundImage} {
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

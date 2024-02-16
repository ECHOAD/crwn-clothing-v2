import {
  BackgroundImage,
  ItemContainer,
  Body,
  Title,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <ItemContainer>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <Title>{title}</Title>
        <p>Shop Now</p>
      </Body>
    </ItemContainer>
  );
};

export default DirectoryItem;

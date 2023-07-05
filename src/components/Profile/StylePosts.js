import styled from "styled-components";
export const Content = styled.div``;

export const Container = styled.div`
  grid-area: main;
`;
export const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #fff;
  border-radius: 5 px;
  position: relative;
  border: none;
`;

export const ArtCard = styled.div`
  display: flex;
  position: relative;
  width: 1250px;
  margin-top: 80px;
  margin-left: 125px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const Article = styled(CommonCard)``;

export const SharedImg = styled.div`
  width: 100%;
  height: 40vh; /* Set the desired height for the images */
  overflow: hidden;
  img {
    margin-top: 10px;
    width: 100%;
    height: 100%;

    img,
    video {
      object-fit: cover; /* Ensure the image or video fills the square container */
      width: 100%;
      height: 100%;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 auto; /* Center the grid horizontally */

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  /* Add your grid item styles here */
`;

import styled from "styled-components";

export const Container = styled.div`
  /* Add your container styles here */
`;

export const ArtCard = styled.div`
  /* Add your art card styles here */
`;

export const Content = styled.div`
  /* Add your content styles here */
`;

export const Article = styled.div`
  /* Add your article styles here */
`;

export const SharedImg = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%; /* Create a square container */
  position: relative;

  a {
    position: absolute;
    top: 0;
    left: 0;
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

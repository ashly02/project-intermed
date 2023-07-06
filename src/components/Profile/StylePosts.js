import styled from "styled-components";

export const Container = styled.div`
  width: 81.5vw;
  margin: auto;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin: 10px;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 10px;
`;

export const Article = styled.div`
  // background-color: #f0f2f5;
  border-radius: 10px;
  overflow: hidden;
  display: ${(props) => (props.img ? "block" : "none")};
`;

export const VideoArticle = styled.div`
  // background-color: #f0f2f5;
  border-radius: 10px;
  overflow: hidden;
  display: ${(props) => (props.vid ? "block" : "none")};
`;

export const SharedImg = styled.div`
  width: 100%;
  // height: 0;
  padding-top: 100%;
  position: relative;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const SharedVid = styled.div`
  width: 100%;
  // height: 0;
  // padding-top: 100%;
  position: relative;
  cursor: pointer;
`;

import { useEffect } from "react";
import PostModal from "../Home/PostModal";
import { connect } from "react-redux";
import { getArticlesAPI } from "../../actions";
import ReactPlayer from "react-player";

import {
  SharedImg,
  Container,
  Content,
  Article,
  ArtCard,
  GridContainer,
  GridItem,
} from "./StylePosts";

const Posts = (props) => {
  useEffect(() => {
    props.getArticles();
  }, []);

  return (
    <Container>
      <Content>
        {props.loading && <img src="./images/spin-loader.svg" />}
        <GridContainer>
          {props.articles.length > 0 &&
            props.articles.map((article, key) => (
              <GridItem key={key}>
                <Article>
                  <SharedImg>
                    <a>
                      {!article.shareImg && article.video ? (
                        <ReactPlayer
                          width="100%"
                          height="100%"
                          url={article.video}
                          controls={true}
                        />
                      ) : (
                        article.shareImg && (
                          <img src={article.shareImg} alt="Post" />
                        )
                      )}
                    </a>
                  </SharedImg>
                </Article>
              </GridItem>
            ))}
        </GridContainer>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const currentUserEmail = state.userState.user.email;
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles
      .filter((article) => article.actor.description === currentUserEmail)
      .map((article) => ({
        ...article,
        id: state.articleState.articles.find((a) => a.id === article.id).id,
      })),
    articleIDs: state.articleState.articles.map((article) => article.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

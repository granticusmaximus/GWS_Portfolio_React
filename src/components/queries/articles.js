import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      data {
        attributes {
          slug
          title
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;

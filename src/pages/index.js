import React from 'react';
import Sidebar from '../components/sidebar';

export default ({ data }) => {
  const url = data.allPrismicProfilePicture.edges[0].node.data.profile_picture.url;
  return <Sidebar width='200px' src={url} />;
};

export const query = graphql`
  query ProfilePictureQuery {
    allPrismicProfilePicture {
      edges {
        node {
          id
          data {
            profile_picture {
              url
            }
          }
        }
      }
    }
  }
`;

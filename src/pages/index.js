import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1
  };

const IndexWrapper = styled.main`
p, h1{
    color: ${({ theme }) => theme.text};
    font-size: 20px;
}
h2{
    color: grey;
    font-size: 14px;
}
a{
    text-decoration: none;
}
.my-masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: content-box;
  }
  
  .my-masonry-grid_column > div { 
    background: ${({ theme }) => theme.gridBG};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.dropShadow};
    padding: 1em;
    margin-bottom: 30px;
  }
`;

const PostWrapper = styled.div`
`;

export default ({ data }) => {
    return (
        <Layout>
            <IndexWrapper>
                <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {data.allMdx.nodes.map(
                    ({id, excerpt, frontmatter, fields }) => (
                    <PostWrapper>
                        <Link to={fields.slug}>
                            <h1>{frontmatter.title}</h1>
                        </Link>
                            <p>{excerpt}</p>
                            <h2>{frontmatter.date}</h2>
                    </PostWrapper>
                    )
                )}
                </Masonry>
            </IndexWrapper>
         </Layout>
    );
};

export const query = graphql`
query SITE_INDEX_QUERY {
    allMdx (
        sort: { fields: [frontmatter___date], order:DESC }
        filter: {frontmatter: {published: {eq: true} } }
            ){
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "YYYY MMMM Do")
                }
                fields {
                    slug
                }
            }
        }
    }
`;

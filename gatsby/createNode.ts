import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

const getSeries = (relativeFilePath: string) => {
  const pathArray = relativeFilePath.split('/');
  if (pathArray.length === 4) {
    return pathArray[1];
  }
  return undefined;
};

const createNode:GatsbyNode['onCreateNode'] = async({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    });

    const series = getSeries(relativeFilePath);

    createNodeField({
      node,
      name: 'path',
      value: `/posts${relativeFilePath}`,
    });
    createNodeField({
      node,
      name: 'series',
      value: series,
    });
  }
};

export { createNode };

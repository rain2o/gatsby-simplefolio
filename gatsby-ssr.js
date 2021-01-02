exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.sort((a, b) => {
    if (a.type === 'meta') {
      return -1;
    }
    if (b.type === 'meta') {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};

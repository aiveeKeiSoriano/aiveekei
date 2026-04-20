/**
 * I'm using this util for added background-image in styled-components
 * Because the string parsing of styled-components is having a problem with quotation
 * marks for image url
 */

const formatCssUrl = (url: string) => {
  return `url("${url}")`;
};

export default formatCssUrl;

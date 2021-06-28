import {schemas} from "../data"

export const getSchemas = () => {  
  const mappedSchemas = {}
  Object.keys(schemas).forEach( name => {
    mappedSchemas[name] = schemas[name];
  })
  

  return mappedSchemas;
};

export const extractMeta = ({ data }) => {
  const result = {};
  Object.keys(data).forEach((prop) => {
    if (prop.includes('meta')) {
      result[prop] = data[prop];
    }
  });

  return result;
};
export const extractContent = ({ data }) => {
  const result = {};
  Object.keys(data).forEach((prop) => {
    if (!prop.includes('meta') && prop !== 'slug') {
      result[prop] = data[prop];
    }
  });

  return result;
};
export const extractConfig = (data) => {
  let result = {
    slug: data.data.slug,
  };

  delete data.data;

  result = {
    ...result,
    ...data,
  };

  return result;
};

export const replaceEach = (string, remove, replace) => {
  var re = new RegExp(remove, "g")
  return string.replace(re, replace)
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const underscoreToCamelCase = (string) => {
  let result = ""
  const splitted = string.split("_");
  splitted.forEach( (part, index) => {
    if(index > 0){
      result = result + capitalize(part)
    }else{
      result = part;
    }
  })

  return result;
}

export const formatNumber = (number) => {
  return Number(number).toLocaleString("da-dk");
};
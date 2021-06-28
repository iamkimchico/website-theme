import { getLangShort } from "."

export const createUrl = (slug, uid, lang) => {
  let formattedLang = `${getLangShort(lang)}`
  let formattedSlug = slug;

  if(lang === "da-dk"){
    formattedLang = ""
  }

  if( uid === "forside" && slug === null){
    formattedSlug = ""
  }

  return `${formattedLang}/${formattedSlug}`
}
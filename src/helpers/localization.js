import { languageSettings } from "../data"

export const getLangShort = longLang => {
  return languageSettings.languages.find(
    language => language.codeLong === longLang
  ).codeShort
}
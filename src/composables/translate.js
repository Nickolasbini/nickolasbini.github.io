import store from "@/store";
import { transformText } from "./textUtils";

export async function gatherTranslationsFile(){
    if(store.getters.getTranslations !== null)
        return true;
    getAllTranslations();
}

export function getAllTranslations() {
    if(store.getters.getTranslations !== null){
        return store.getters.getTranslations;
    }
    let translations = null;
    try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/data/translations.json', false);
        xhr.send();
        if (xhr.status === 200) {
            translations = JSON.parse(xhr.responseText);
            store.dispatch('saveTranslations', translations);
        }
    } catch (error) {
        translations = null;
    }
    return translations;
}

export function translate(text = '', textTransform = '') {
    if(!text || text == '')
        return text;
    try {
        const translations = getAllTranslations();
        if(translations[text] === undefined || translations[text] === null || translations[text] === '')
            return transformText(text, textTransform);
        return translations[text][store.getters.getUserLang] === undefined || translations[text][store.getters.getUserLang] === null
                ? transformText(text, textTransform)
                : transformText(translations[text][store.getters.getUserLang], textTransform);
    } catch (error) {
        return text;
    }
}
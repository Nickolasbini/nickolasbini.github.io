import store from "@/store";
import { transformText } from "./textUtils";
import translations from "@/assets/TranslationsList";

export function getAllTranslations() {
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
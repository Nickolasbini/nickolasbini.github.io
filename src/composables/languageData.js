import store from '@/store';

const languageData = {
    getAllLanguages(){
        if(store.getters.getLanguages !== null){
            return store.getters.getLanguages;
        }
        let languages = null;
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/data/languages.json', false);
            xhr.send();
            if (xhr.status === 200) {
                languages = JSON.parse(xhr.responseText);
                let oficialLangs = {};
                for(let lang in languages){
                    if(!this.getOfficialLanguagesIsoCodes().includes(lang))
                        continue;
                    let values = languages[lang];
                    values['isoCode'] = lang;
                    oficialLangs[lang] = values;
                }
                languages = oficialLangs;
                store.dispatch('saveLanguages', languages);
            }
        } catch (error) {
            languages = [];
        }
        return languages;
    },

    getOfficialLanguagesIsoCodes(){
        return [
            'en', 'pt', 'es'
        ];
    },

    getDefaultLanguageIsoCode(){
        return 'en';
    }
}

export default languageData;
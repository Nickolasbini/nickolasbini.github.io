import store from '@/store';
import countries from './country';
import languages from './languageData';

const ipHandler = {
    async detectIp() {
        if(store.getters.hasFetchedLanguageByIp)
            return;
        try {
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          const ipData = await ipResponse.json();
          const geoResponse = await fetch(`https://ipinfo.io/${ipData.ip}/json`);
          const geoData = await geoResponse.json();
          let dataToStore = {
            query: geoData.ip != undefined ? geoData.ip : '',
            countryCode: geoData.country != undefined ? geoData.country.toLowerCase() : '',
            additionalInfo: geoData.additionalInfo != undefined ? geoData : {}
          }
          this.setUserLang(dataToStore.countryCode);
        } catch (error) {
          console.error('error detecting ip', error);
        }
        store.dispatch('saveIpGathering', true);
    },

    async setUserLang(countryIso = ''){
        let userLang = languages.getDefaultLanguageIsoCode();
        if(countryIso != ''){
            let officialLangs = languages.getOfficialLanguagesIsoCodes();
            let countryData = await countries.listCountries(true);
            for(let country of countryData){
                if(country['lcountry_acronyn'] == undefined || country['spokenLanguages'] == undefined)
                    continue;
                if(countryIso == country['lcountry_acronyn']){
                    for(let langIsoCode of JSON.parse(country['spokenLanguages'])){
                        if(officialLangs.includes(langIsoCode)){
                            userLang = langIsoCode;
                        }
                    }
                    break;
                }
            }
        }
        this.changeLanguage(userLang);
    },
    
    changeLanguage(isoCode = ''){
        if(isoCode == '')
            return;
        store.dispatch('changeLanguage', {langIso: isoCode});
        store.dispatch('cleanComboChest', {});
    }
}
export default ipHandler;

import store from '@/store';

const countries = {
    async listCountries() {
        let countryFileData = store.getters.getOnComboChest('country_file_data');
        if(![null, undefined].includes(countryFileData) && Array.isArray(countryFileData) && countryFileData.length > 0)
            return countryFileData;
        try {
            let countriesFileData = [];
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/data/countries.json', false);
            xhr.send();
            if (xhr.status === 200) {
                countriesFileData = JSON.parse(xhr.responseText);
                if(countriesFileData){
                    store.dispatch('saveOnComboChest', {
                        key: 'country_file_data',
                        value: countriesFileData
                    });
                    return countriesFileData
                }
            }
            return countriesFileData;
        } catch {
            return [];
        }
    }
}

export default countries;
export function transformText(text = '', method = ''){
    let transformedText = '';
    switch(method){
        case 'ucfirst':
            transformedText = ucfirst(text);
        break;
        case 'upper':
            transformedText = toUpperCase(text);
        break;
        case 'lower':
            transformedText = toLowerCase(text);
        break;
        case 'capitalize':
            transformedText = capitalizeWords(text);
        break;
        default:
            transformedText = text;
        break;
    }
    return transformedText;
}

export function ucfirst(str) {
    if (!str || str == '' || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toUpperCase(str) {
    if (!str) return str;
    return str.toUpperCase();
}

export function toLowerCase(str) {
    if (!str) return str;
        return str.toLowerCase();
}

export function capitalizeWords(str) {
    if (!str) return str;
    return str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

export function limitText(str = '', length = 50) {
    if(str == '')
        return str;
    let index = 0;
    let limitedText = '';
    for(let char of str){
        if(index >= length){
            limitedText += '...';
            break;
        }
        limitedText += char;
        index++;
    }
    return limitedText;
}

export function makeSlug(val = ''){
    if(val == '')
        return '';
    let arr = val.split(' ');
    return toLowerCase(arr.join('-'));
}
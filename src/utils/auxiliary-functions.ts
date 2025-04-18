
export const toUpperCase = (word: string) => {
    return word.replace(/^./, char => char.toUpperCase());  
}

export const iconSelection = (icon: string) => {
    
    switch (icon) {
        case 'book':
            return 'book.svg';
        case 'man':
        case 'AutoPilot 5000':
        case 'Роман':
            return 'man.svg';
        case 'company':
        case 'InnovTech':
            return 'company.svg';
        case 'car':
        case 'autonomous driving':
            return 'car.svg';
        case 'antivirus':
            return 'antivirus.svg';
        case 'protection':
        case 'kaspersky':
            return 'kaspersky.svg';
        case 'react':
            return 'react.svg';

        case 'globalsecuritymag.com':
            return 'globalsecuritymag.com.svg';
        case 'punto-informatico.it':
            return 'punto-informatico.it.svg';
        case 'ria.ru':
            return 'ria.ru.svg';

        case 'at':
            return 'flag-at.svg';
        case 'fr':
            return 'flag-fr.svg';
        case 'ru':
            return 'flag-ru.svg';
        default:
          return 'unknown.svg';
    }    
}
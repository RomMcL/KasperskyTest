
export const keysSearch = (str: string) => {
    return str.match(/\b[A-Z]+\b(?==)/g) || [];
}


export const keywordSearch = (str: string) => {
    const parts = str.split(/ (AND|OR|NOT) (?=(?:[^"]*"[^"]*")*[^"]*$)/);

    const keyWords = parts.map(part => {
        if (!['AND', 'OR', 'NOT'].includes(part)) {
            const firstQuoteIndex = part.indexOf('"');
            let lastQuoteIndex = part.lastIndexOf('"');
            if (part.charAt(lastQuoteIndex) !== '"') lastQuoteIndex = part.length;            
            const newPart = part.slice(firstQuoteIndex + 1, lastQuoteIndex);                
            return newPart; 
        }
    }).filter(Boolean);

    return keyWords;
}

// Экранирование внутренних кавычек
export const escapeInnerQuotes = (str: string) => {
    const parts = str.split(/\s+(AND|OR|NOT)\s+/);
    
    const processed = parts.map(part => {
      if (['AND', 'OR', 'NOT'].includes(part)) {
        return part;
      }

      const countQuotation = (part.match(new RegExp('"', 'g')) || []).length;

      if (countQuotation > 2) {

        const firstQuoteIndex = part.indexOf('"');
        const lastQuoteIndex = part.lastIndexOf('"');
        const middlePart = part.slice(firstQuoteIndex + 1, lastQuoteIndex).replace(/"/g, '\\"');
        const shieldedPart = part.slice(0, firstQuoteIndex + 1)
                            + middlePart
                            + part.slice(-(part.length-lastQuoteIndex));
        return shieldedPart;    
      }
                
      return part;
    });

    return processed.join(' ');
}


export const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Ошибка при копировании текста в буфер обмена:', err);
    }
};

export const pasteTextFromClipboard = async () => {
    let text = '';

    try {
        text = await navigator.clipboard.readText();
    } catch (err) {
      console.error('Ошибка при чтении текста из буфера обмена:', err);
    }

    return text;
};

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

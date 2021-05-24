import tr from './tr';
import en from './en';
import ru from './ru';

const language = {
	tr: tr,
	en: en,
	ru: ru
};

export const getLangText = (string, parameter = undefined) => {

	let lang = localStorage.getItem('lang');

	if ( lang !== 'tr' && lang !== 'en' && lang !== 'ru' ){
		lang = navigator.language.slice(0, 2);
		localStorage.setItem('lang', lang);
	}

	let word = language[lang][string];

	if ( parameter ){
		const regex = new RegExp('{(.*?)}', 'g');
		let regexMatch = null;
		while ( regexMatch = regex.exec(word) ){
			word = word.replace( regexMatch[0], parameter[regexMatch[1]] );
		}
	}

	return word;

}
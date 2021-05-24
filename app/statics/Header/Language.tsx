import React, { useState, useRef } from 'react';
import OutsideClick from './OutsideClick';
import { getLangText } from '../../support';

const Language = () => {

	/* State */
	const [show, setShow] = useState(false);

	/* Ref */
	const visible = useRef(null);
	const hidden = useRef(null);

	/* Function */
	OutsideClick(visible, hidden, show, () => { setShow(false); });

	const languageClick = (lang) => {
		localStorage.setItem('lang', lang);
		setTimeout(() => {
			location.reload();
		}, 1000);
	};

	return(
		<>
			<div onClick={() => setShow(!show)} ref={visible} className="headerRightIconVisible">
				<em className="flag">{ getLangText('langCode') }</em>
			</div>
			<div ref={hidden} className={'headerDropDown language ' + ( show ? 'opened' : 'closed' )}>
				<div className="dropDownLanguage">
					<span className="webViewReload" onClick={() => languageClick('tr')}>
						<em className="flag">TR</em>
						<b>Türkçe</b>
					</span>
					<span className="webViewReload" onClick={() => languageClick('en')}>
						<em className="flag">EN</em>
						<b>English</b>
					</span>
					<span onClick={() => languageClick('ru')}>
						<em className="flag">RU</em>
						<b>русский</b>
					</span>
				</div>
			</div>
		</>
	);

}

export default Language;
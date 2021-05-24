import React, { useRef, memo } from "react";
import SimpleBar from "simplebar-react";
import './style.scss';

interface propsType {
	// Required
	activeTab: number,
	changeTab(any): void,
	tabs: Array<string>

	// Optional
	//none
}

const HeaderTab = (props:propsType) => {

	const scrollRef = useRef(null);
	const headerTabDiv = useRef(null);

	const handleChangeTab = (index) => {
		var wrapperWidth = headerTabDiv.current.closest('.headerWrapper').offsetWidth;
		var activeTabElement = headerTabDiv.current.childNodes[index];
		scrollRef.current.scroll({ left : (activeTabElement.offsetLeft) - (wrapperWidth -  activeTabElement.offsetWidth) / 2, behavior: 'smooth' })
		props.changeTab(index + 1);
	}

	return(
		<div className="headerWrapper">
			<SimpleBar scrollableNodeProps={{ ref: scrollRef }}>
				<div className="headerTab" ref={headerTabDiv}>
					{ props.tabs.map((item, index) => (
						<span key={index} className={ props.activeTab === (index + 1) ? 'active' : '' } onClick={() => handleChangeTab(index)} data-text={item}>{ item }</span>
					)) }
				</div>
			</SimpleBar>
		</div>
	);

}

export default memo(HeaderTab);
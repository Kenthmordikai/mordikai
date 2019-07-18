import React, { createContext, useState, useContext } from 'react';

const TabContext = createContext();

const Tabs = (props) => {
	const {
		initialValue,
		className = '',
		children,
		...restProps
	} = props;

	const [activeTab, changeTab] = useState(initialValue);
	const tabProviderValue = { activeTab, changeTab };

	const classNames = `tabs ${className}`;

	return(
		<TabContext.Provider value={tabProviderValue}>
			<div className={classNames} {...restProps}>
				{children}
			</div>
		</TabContext.Provider>
	)
}

const Tab = (props) => {
	const {
    name,
    className = '',
    onClick = () => {},
    children,
    ...restProps
	} = props;
	
	const tabContext = useContext(TabContext);

	const classNames = `
		tab
		${tabContext.activeTab === name ? 'active' : ''}
		${className}
	`;

	const handleClick = event => {
		tabContext.changeTab(name);
		onClick(event);
	};

	return(
		<span className={classNames} onClick={handleClick} {...restProps}>
			{children}
		</span>
	);
}

const TabPanel = (props) => {
	const { 
		name, 
		className = '', 
		children, 
		...restProps 
	} = props;

	const tabContext = useContext(TabContext);

	const classNames = `tab-panel ${className}`;

	return(
		tabContext.activeTab === name && (
			<div className={classNames} {...restProps}>
				{children}
			</div>
		)
	)
}

export {Tabs, Tab, TabPanel};












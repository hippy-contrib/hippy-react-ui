import React from 'react';
import {
	StaticRouter as SRouter,
	BrowserRouter as BRouter,
	HashRouter as HRouter,
	MemoryRouter as MRouter,
	Link as WebLink,
} from 'react-router-dom';
import { ISWEB } from './utils';

// import HippyLink from './Link';

export * from 'react-router-dom';

// export let Link = WebLink;
// !ISWEB && (Link = HippyLink );

const routerWrap = (BasicRouter) => {
	return (props) => {
		if (!ISWEB && BasicRouter !== MRouter) {
			console.warn('hippy only support MemoryRouter, pls use MemoryRouter instead');
		}
		console.warn('hippy only support MemoryRouter, pls use MemoryRouter instead');
		return <BasicRouter { ...props } />
	}
}

/**
 * hippy只支持MemoryRouter，所以使用其他的Router，需要添加警告
 */
// export const StaticRouter = routerWrap(SRouter);
// export const BrowserRouter = routerWrap(BRouter);
// export const HashRouter = routerWrap(HRouter);
export const MemoryRouter = routerWrap(MRouter);

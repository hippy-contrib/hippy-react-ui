import IconPage from './pages/Icon';
import AvatarPage from './pages/Avatar';
import DividerPage from './pages/Divider';
import TextPage from './pages/Text';
import SwitchPage from './pages/Switch';
import TabsPage from './pages/Tabs';
import ModalPage from './pages/Modal';
import ListPage from './pages/List';

export const pages = [
	{
		name: 'Icon',
		path: 'icon',
		component: IconPage,
	},{
		name: 'Avatar',
		path: 'avatar',
		component: AvatarPage,
	},{
		name: 'Divider',
		path: 'divider',
		component: DividerPage,
	},{
		name: 'Text',
		path: 'text',
		component: TextPage,
	},{
		name: 'Switch',
		path: 'switch',
		component: SwitchPage,
	},{
		name: 'Tabs',
		path: 'tabs',
		component: TabsPage,
	},{
		name: 'Modal',
		path: 'modal',
		component: ModalPage,
	},{
		name: 'List',
		path: 'list',
		component: ListPage,
	}
];

export default pages;

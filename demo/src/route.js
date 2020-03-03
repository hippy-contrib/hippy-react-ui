import IconPage from './pages/Icon';
import AvatarPage from './pages/Avatar';
import DividerPage from './pages/Divider';
import TextPage from './pages/Text';
import SwitchPage from './pages/Switch';
import TabsPage from './pages/Tabs';
import ModalPage from './pages/Modal';
import ButtonPage from './pages/Button';
import CardPage from './pages/Card';
import BadgePage from './pages/Badge';

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
		name: 'Button',
		path: 'button',
		component: ButtonPage,
	},{
		name: 'Card',
		path: 'card',
		component: CardPage,
	},{
		name: 'Badge',
		path: 'badge',
		component: BadgePage,
	}
];

export default pages;

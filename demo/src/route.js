import IconPage from './pages/Icon';
import AvatarPage from './pages/Avatar';
import DividerPage from './pages/Divider';
import TextPage from './pages/Text';

export const pages = [
	{
		name: 'Icon',
		path: 'icon',
		component: IconPage,
	},{ name: 'Avatar',
		path: 'avatar',
		component: AvatarPage,
	},{ name: 'Divider',
		path: 'divider',
		component: DividerPage,
	},{ name: 'Text',
		path: 'text',
		component: TextPage,
	},
];

export default pages;

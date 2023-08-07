import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import Airtm from 'views/admin/airtm';
import RTL from 'views/admin/rtl';

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import Home from 'layouts/landing/home'
const routes = [
	{
		name: 'Main Dashboard',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainDashboard
	},
	
	{
		name: 'Payment',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/data-tables',
		component: DataTables
	},
	{
		name: 'Airtm',
		layout: '/pay',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/airtm',
		component: Airtm
	},
	{
		name: 'Profile',
		layout: '/admin',
		path: '/profile',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: Profile
	},
	{
		name: 'Home',
		layout: '/home',
		path: '/landing',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: Home
	}
];

export default routes;

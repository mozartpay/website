import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart,MdAttachMoney,MdMoney } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import Money from 'views/admin/dataTables/money';
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
	/*{
		name: 'NFT Marketplace',
		layout: '/admin',
		path: '/nft-marketplace',
		icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
		component: NFTMarketplace,
		secondary: true
	},*/
	{
		name: 'Payment',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/payment',
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
		name: 'Sign In',
		layout: '/auth',
		path: '/sign-in',
		icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
		component: SignInCentered
	},
	/*{
		name: 'RTL Admin',
		layout: '/rtl',
		path: '/rtl-default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: RTL
	},*/
	{
		name: 'Home',
		layout: '/home',
		path: '/landing',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: Home
	},
	{
		name: ' Send Money',
		layout: '/admin',
		path: '/sendMoney',
		icon: <Icon as={MdAttachMoney} width='20px' height='20px' color='inherit' />,
		component: Money
	}
];

export default routes;

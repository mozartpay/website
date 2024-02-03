import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart,MdAttachMoney } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import Moneyy from 'views/admin/dataTables/money';
import Airtm from 'views/admin/airtm';
import Request from 'views/admin/dataTables/request';
// Auth Imports
import SignInCentered from 'views/auth/signIn';
import Home from 'layouts/landing/home'
import Identity from 'views/admin/dataTables/identity';
import OAs from 'views/admin/dataTables/oas';
import AirtmBlog from 'layouts/airtmBlog/home';

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
		component: Moneyy
	},
	{
		name: ' Request Money',
		layout: '/admin',
		path: '/requestMoney',
		icon: <Icon as={MdAttachMoney} width='20px' height='20px' color='inherit' />,
		component: Request
	},
	{
		name: ' Identity',
		layout: '/admin',
		path: '/identity',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: Identity
	},
	{
		name: ' OAs',
		layout: '/admin',
		path: '/oas',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: OAs
	},
	{
		name: ' AirtmBlog',
		layout: '/admin',
		path: '/blogs/airtm-integration',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: AirtmBlog
	},
];

export default routes;

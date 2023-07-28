import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import SignUp from './views/auth/signUp'
import AdminLayout from './layouts/admin';
import Home from './layouts/landing';
import RTLLayout from './layouts/rtl';
import SuccessPage from './layouts/transaction/confirm'
import RejectPage from './layouts/transaction/rejected'
import FailurePage from './layouts/transaction/failed'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import Airtm from 'views/admin/airtm';
ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<HashRouter>
				<Switch>
					<Route path={`/auth`} component={AuthLayout} />
					<Route path={`/admin`} component={AdminLayout} />
					<Route path={`/airtm`} component={Airtm} />
					<Route path={`/rtl`} component={RTLLayout} />
					<Route path={`/home`} component={Home} />
					<Route path={`/signup`} component={SignUp} />
					<Route path={`/confirm`} component={SuccessPage} />
					<Route path={`/cancel`} component={RejectPage} />
					<Route path={`/callback`} component={FailurePage} />
					<Redirect from='/' to='/home' />
				</Switch>
			</HashRouter>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);

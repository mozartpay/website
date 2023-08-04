import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { HashRouter,BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import SignUp from './views/auth/signUp'
import AdminLayout from './layouts/admin';
import Home from './layouts/landing';
import Terms from './layouts/terms/home';
import Privacy from './layouts/Privacy/home';
import Contact from './layouts/contact/home';
import Imprint from './layouts/imprint/home';
import Docs from './layouts/docs/home';
import Blogs from './layouts/blog/home';
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
		<BrowserRouter>
				<Switch>
					<Route path={`/auth`} component={AuthLayout} />
					<Route path={`/admin`} component={AdminLayout} />
					<Route path={`/airtm`} component={Airtm} />
					<Route path={`/rtl`} component={RTLLayout} />
					<Route path={`/home`} component={Home} />
					<Route path={`/terms`} component={Terms} />
					<Route path={`/imprint`} component={Imprint} />
					<Route path={`/docs`} component={Docs} />
					<Route path={`/contactUs`} component={Contact} />
					<Route path={`/privacy`} component={Privacy} />
					<Route path={`/blogs`} component={Blogs} />
					<Route path={`/signup`} component={SignUp} />
					<Route path={`/confirm`} component={SuccessPage} />
					<Route path={`/cancel`} component={RejectPage} />
					<Route path={`/callback`} component={FailurePage} />
					<Redirect from='/' to='/home' />
				</Switch>
				</BrowserRouter>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);

import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';

import Grid from './pages/Grid';
import Flex from './pages/Flex';
import DropdownList from './pages/DropdownList';

function App() {
	return (
		<Router>
			<nav className='bg-primary d-flex justify-content-center'>
				<NavLink
					className={(isActive) =>
						`${isActive && 'bg-dark'} btn text-light p-2`
					}
					to='/test-grid'>
					Grid
				</NavLink>
				<NavLink
					className={(isActive) =>
						`${isActive && 'bg-dark'} btn text-light p-2`
					}
					to='/test-flex'>
					Flex
				</NavLink>
				<NavLink
					className={(isActive) =>
						`${isActive && 'bg-dark'} btn text-light p-2`
					}
					to='/test-dropdown'>
					Dropdown
				</NavLink>
			</nav>
			<Switch>
				<Route path='/test-grid'>
					<Grid />
				</Route>
				<Route path='/test-flex'>
					<Flex />
				</Route>
				<Route path='/test-dropdown'>
					<DropdownList />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

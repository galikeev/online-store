import { useContext, useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Spinner } from 'react-bootstrap';

import { Context } from './index';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';


const App = observer(() => {
	const {user} = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check()
			.then(data => {
				user.setUser(data);
				user.setIsAuth(true);
			})
			.finally(() => setLoading(false));
	// eslint-disable-next-line  
	}, []);

	if (loading) {
		return <Spinner animation='grow'/>
	}
	
	return (
		<BrowserRouter>
			<NavBar/>
			<AppRouter/>
		</BrowserRouter>
	);
});

export default App;

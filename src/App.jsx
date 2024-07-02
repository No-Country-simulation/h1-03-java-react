import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Spinner from './components/Resources/Spinner';
import ComponentLayout from './components/ComponentLayout';

export default function App() {
	const Router = lazy(() => import('./components/Router'))

	return (
		<Provider store={store}>
			<Suspense fallback={<Spinner />}>
				<ComponentLayout>
					<Router />
				</ComponentLayout>
			</Suspense>
		</Provider>
	);
}

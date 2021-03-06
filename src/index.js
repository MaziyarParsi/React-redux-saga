import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { store } from './store'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)

import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

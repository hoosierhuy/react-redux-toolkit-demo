// React core
import React from 'react'
import ReactDOM from 'react-dom'

// Libraries
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

// App Level
import App from './App'
import './index.css'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'white',
      },
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

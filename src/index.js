import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StateProvider } from './Context'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  uri: 'https://petgram-server-rdml-kli4u9ssf.vercel.app/graphql'
})

ReactDOM.render(
  <StateProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StateProvider>,
  document.getElementById('app')
)

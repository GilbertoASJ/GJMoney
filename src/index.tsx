// Importações

import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
	models: {
		transaction: Model, 
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Website',
					type: 'deposit',
					category: 'Desenvolvimento',
					amount: 3000,
					createdAt: new Date('2021-03-01 18:00'),
				},

				{
					id: 2,
					title: 'Compras',
					type: 'withdraw',
					category: 'Alimentação',
					amount: 400,
					createdAt: new Date('2021-03-19 09:00'),
				},
			],
		})
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction')
		})

		this.post('/transactions', (schema, request) => {
			// Pegando os dados, e os transformando para JSON
			const data = JSON.parse(request.requestBody)

			// Retorno do banco de dados do miragejs
			return schema.create('transaction', data)
		})
	}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import express from 'express'
import fs from 'fs'
import reactServer from 'dm-react-server'
import mainRoutes from '../main/Routes'

const ROOT_PATH = process.cwd()
const TMP_PATH = ROOT_PATH + '/tmp'

export default function (done) {
	reactServer({
		appRoutes: {
			main: mainRoutes
		},
		title: 'Boilerplate'
	}, (ee, options) => {
		ee.on('middleware', (expressApp) => {
			if (!fs.existsSync(TMP_PATH)) fs.mkdirSync(TMP_PATH)
			expressApp.use('/tmp', express.static(TMP_PATH))
		})

		ee.on('routes', (expressApp) => {
			//	Express.use server routes here when we will have ones
		})

		ee.on('done', () => {
			if (done != null) done()
		})
	})
}

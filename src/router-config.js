import Construction from './components/Construction'
import Page from './components/Page'

export const routes = [{
	name: 'home',
	path: '/',
	redirect: 'construction'
}, {
	name: 'construction',
	path: '/construction',
	component: Construction
}, {
	path: '/:page',
	component: Page
}]

// import Construction from './components/Construction'
const Construction = resolve => require(['./components/Construction'], resolve)
// import Page from './components/Page'
const Page = resolve => require(['./components/Page'], resolve)

export const routes = [{
	name: 'construction',
	path: '/construction',
	component: Construction
}, {
	name: 'home',
	path: '',
	component: Page,
	children: [{
		path: '/:pageId'
	}],
	redirect: 'construction'
}]

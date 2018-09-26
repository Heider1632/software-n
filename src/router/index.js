import Vue from 'vue';
import VueRouter from 'vue-router'
import home from '../components/home'
import homeNutricion from '../components/nutricion/home-n'
import conceptoNutricion from '../components/nutricion/concept-n'
import comidaNutricion from '../components/nutricion/comida-n'
import tipsNutricion from '../components/nutricion/tips-n'
import gameNutricion from '../components/nutricion/game-n'
import about from '../components/about'

Vue.use(VueRouter);

let router = new VueRouter({
	routes: [
		{
			path : '/',
			name: 'home', 
			component: home,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/inicionutricion', 
			name: 'inicionutricion',
			component: homeNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/conceptonutricion',
			name: 'conceptonutricion',
			component: conceptoNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/comidanutricion',
			name: 'comidanutricion',
			component: comidaNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/tipsnutricion', 
			name: 'tipsnutricion',
			component: tipsNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/juegonutricion', 
			name: 'juegonutricion',
			component: gameNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/acerca',
			name: 'acerca',
			component: about,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
			}
	]
});

export default router;
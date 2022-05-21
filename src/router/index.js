import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/Foods.vue";
import FoodDetail from "../views/FoodDetail.vue";
import Keranjang from "../views/KeranjangView.vue";
import PesananSukses from "../views/pesanan-sukses.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/foods",
		name: "Foods",
		component: FoodsView,
	},
	{
		path: "/foods/:id",
		name: "FoodDetail",
		component: FoodDetail,
	},
	{
		path: "/keranjang",
		name: "keranjang",
		component: Keranjang,
	},
	{
		path: "/pesanan-sukses",
		name: "pesanan-sukses",
		component: PesananSukses,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;

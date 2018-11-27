const Item1 = () =>
    import ( /* webpackChunkName: "item1" */ '../pages/item1');
const Item2 = () =>
    import ( /* webpackChunkName: "item2" */ '../pages/item2');


const routes = [{
    path: '/user/item1',
    component: Item1
}, {
    path: '/user/item2',
    component: Item2
}]


export default routes;
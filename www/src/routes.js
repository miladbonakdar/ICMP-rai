import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import Setting from "./components/Setting.vue";
import Area from "./components/Area.vue";
import Node from "./components/Node.vue";
import Log from "./components/Log.vue";
import routsName from "./routsName";

export const routes = [
    {
        path: "/login",
        component: Login,
        name: routsName.LOGIN
    },
    {
        path: "/dashboard",
        name: routsName.DASHBOARD,
        component: Dashboard
    },
    {
        path: "/setting",
        name: routsName.SETTING,
        component: Setting
    },
    {
        path: "/log",
        name: routsName.LOG,
        component: Log
    },
    {
        path: "/area/:id",
        name: routsName.AREA,
        component: Area
    },
    {
        path: "/node/:id",
        name: routsName.NODE,
        component: Node,
        props: true
    },
    {
        path: "*",
        redirect: { name: routsName.LOGIN }
    }
];

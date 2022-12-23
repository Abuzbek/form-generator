import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddNewDocument from "../views/AddNewDocument.vue";
import DocumnetByID from "../views/DocumentById.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add-new-document",
    name: "AddNewDocument",
    component: AddNewDocument,
  },
  {
    path: "/document/:id",
    name: "DocumnetByID",
    component: DocumnetByID,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

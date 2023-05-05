import {createWebHistory, createRouter} from "vue-router";

import Homepage from "@/pages/Homepage.vue";
import Introduce from "@/pages/Introduce.vue";
import Promotion from "@/pages/Promotion.vue";
import Recruit from "@/pages/Recruit.vue";
import FormRecruit from "@/pages/FormRecruit.vue";
import Contact from "@/pages/Contact.vue";
import Signin from "@/pages/Signin.vue";
import Signup from "@/pages/Signup.vue";
import Cart from "@/pages/Cart.vue";
import Product from "@/pages/Product.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
import Admin from "@/pages/Admin.vue";
import AdminAdd from "@/pages/AdminAdd.vue";
import AdminEdit from "@/pages/AdminEdit.vue";
import Test from "@/pages/Test.vue";
const routes = [
    {
        path: "/test",
        name: "Test",
        component: Test,
        meta: {title: 'Mercy | Test'},
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {title: 'Mercy | Quản trị'},
    },
    {
        path: "/admin/add",
        name: "AdminAdd",
        component: AdminAdd,
        meta: {title: 'Mercy | Thêm sản phẩm'},
        props: true,
        
    },
    {
        path: "/admin/:id",
        name: "AdminEdit",
        component: AdminEdit,
        meta: {title: 'Mercy | Cập nhật sản phẩm'},
        props: true,
        
    },
    {
        path: "/",
        name: "Homepage",
        component: Homepage,
        meta: {title: 'Mercy | Trang chủ'},
    },
    {
        path: "/product/:type/:name",
        name: "Product",
        component: Product,
        meta: {title: 'Mercy | Sản phẩm'},
    },
    {
        path: "/detail/:id",
        name: "ProductDetail",
        component: ProductDetail,
        meta: {title: 'Sản phẩm chi tiết'},
    },
    {
        path: "/introduce",
        name: "Introduce",
        component: Introduce,
        meta: {title: 'Mercy | Giới thiệu'},
    },
    {
        path: "/promotion",
        name: "Promotion",
        component: Promotion,
        meta: {title: 'Mercy | Khuyến mãi'},
    },
    {
        path: "/recruit",
        name: "Recruit",
        component: Recruit,
        meta: {title: 'Mercy | Tuyển dụng'},
    },
    {
        path: "/recruit/:name",
        name: "FormRecruit",
        component: FormRecruit,
        meta: {title: 'Mercy | Form Tuyển dụng'},
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {title: 'Mercy | Liên hệ'},
    },
    {
        path: "/signin",
        name: "Signin",
        component: Signin,
        meta: {title: 'Mercy | Đăng nhập'},
    },
    {
        path: "/Signup",
        name: "Signup",
        component: Signup,
        meta: {title: 'Mercy | Đăng ký'},
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: {title: 'Mercy | Giỏ hàng'},
    },
];  

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;



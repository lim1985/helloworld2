import { RouteView, QMSMView } from "@/components/layouts";

export const constantRouterMap = [
  {
    path: "/",
    redirect: "/Uniformlogin",
    hidden: true,
    component: RouteView,
    children: [
      {
        path: "/report",
        name: "Report",
        component: () => import("@/views/report")
        // component: () =>
        //   import(/* webpackChunkName: "report" */ "@/views/report")
      },
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/index")
        // component: () =>
        // import(/* webpackChunkName: "update" */ "@/views/update")
      },
      {
        path: "/qr",
        name: "qr",
        component: () => import("@/views/qrCode")
        // component: () =>
        // import(/* webpackChunkName: "QR" */ "@/views/qrCode")
      },
      {
        path: "/update",
        name: "Update",
        component: () => import("@/views/update")
        // component: () =>
        // import(/* webpackChunkName: "update" */ "@/views/update")
      },
      {
        path: "/addUser",
        name: "AddUser",
        component: () => import("@/views/UserReportAdd")
      },
      {
        path: "/datacount",
        name: "Datacount",
        component: () => import("@/views/datacount")
      },
      {
        path: "/personList",
        name: "PersonList",
        component: () => import("@/views/personList")
      }
      //  {
      //   path: "navigations",
      //   name: "navigations",
      //   component: () =>
      //     import(/* webpackChunkName: "navigations" */ "@/views/navigations")
      // }
    ]
  },
  {
    path: "/count",
    name: "count",
    redirect: "/dxrmallcount",
    hidden: true,
    component: QMSMView,
    children: [
      {
        path: "/dxrmallcount",
        name: "dxrmallcount",
        component: () => import("@/views/dxrmallcount")
      }
    ]
  },
  {
    path: "/qmsm",
    name: "qmsm",
    redirect: "/qmsm",
    hidden: true,
    component: QMSMView,
    children: [
      {
        path: "/qmsm",
        name: "qmsmUrl",
        component: () => import("@/views/qingming")
      }
    ]
  },
  {
    path: "/qm",
    name: "qm",
    redirect: "/qm",
    hidden: true,
    component: QMSMView,
    children: [
      {
        path: "/qm",
        name: "qmUrl",
        component: () => import("@/views/qm")
      }
    ]
  },
  {
    path: "/goto", //gotoSecretKeyUrl
    name: "goto",

    // hidden: true,
    component: () => import("@comp/GOTO/goto")
  },
  {
    path: "/GETDXRM",
    name: "GETDXRM",

    // hidden: true,
    component: () => import("@/views/dxrm")
  },
  {
    path: "/Uniformlogin",
    name: "Uflogin",

    // hidden: true,
    component: () => import("@/views/uninform/login")
  },
  {
    path: "/Uniformlist",
    name: "Uflist",

    // hidden: true,
    component: () => import("@/views/uninform/list")
  },
  {
    path: "/Uniformadd",
    name: "UfAdd",

    // hidden: true,
    component: () => import("@/views/uninform/add")
  }
];

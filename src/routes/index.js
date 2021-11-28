import { MainLayout } from "../views/components/Layout";
import { MainPage } from "../views/pages";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
];

export default routes;

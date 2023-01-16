import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { NavBar } from "./components/NavBar/Navbar";
import { FactoryPage } from "./components/Patterns/Factory/FactoryPage";
import { ProxyPage } from "./components/Patterns/Proxy/ProxyPage";

export type RouteType = {
    path: string;
    element: JSX.Element;
    title: string;
};

export const routes: RouteType[] = [
    { path: "/factory", element: <FactoryPage />, title: "Factory"},
    { path: "/proxy", element: <ProxyPage />, title: "Proxy"},
];

export const Router = () => {
    const onRoutes = () => {
        return routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
        ));
    };

    return (
        <BrowserRouter>
              <NavBar/>
            <Routes>
              <Route key={"/"} element={<HomePage/>}/>
              {onRoutes()}
            </Routes>
        </BrowserRouter>
    );
};

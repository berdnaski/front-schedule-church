import { Outlet } from "react-router-dom";

export function Layout() {
    // const location = useLocation();
    // const shouldShowHeader = !['/login', '/register'].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="items-center justify-center">
                <Outlet />
            </main>
        </div>
    )
}
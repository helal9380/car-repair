import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <h2 className="text-xl ">This is main layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
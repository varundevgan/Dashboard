import { Route, Routes } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Dashboard from "../features/Dashboard/Dashboard"
import Settings from "../features/Settings/Settings"
import ProductList from "../features/ProductList/ProductList"

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/product-list" element={<ProductList />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
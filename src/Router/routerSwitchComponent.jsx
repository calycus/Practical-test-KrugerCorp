import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../Page/Home/homePage'
import Index from '../Page/Components/app';
import Error_404_Not_Found from '../404_not_found';

const RotuerSwitchComponent = () => {

    return (
        <Routes>
            <Route path='/' element={
                <HomePage />
            } />
            <Route path='/index' element={
                <Index />
            } />
            <Route path="/404_not_found" element={
                <Error_404_Not_Found />
            } />
            <Route path="*" element={
                <Navigate to={"/404_not_found"} />
            } />

        </Routes>
    )
}
export default RotuerSwitchComponent


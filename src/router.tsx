import {BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginViews from './views/login'
import RegisterView from './views/registeer'
import AuthLayout from './layouts/authLayout'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path='/auth/login' element={<LoginViews/>}/>
                    <Route path='/auth/register' element={<RegisterView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
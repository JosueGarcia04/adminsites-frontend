import {BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginViews from './views/LoginViews'
import RegisterView from './views/RegisterView'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/auth/login' element={<LoginViews/>}/>
                    <Route path='/auth/register' element={<RegisterView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
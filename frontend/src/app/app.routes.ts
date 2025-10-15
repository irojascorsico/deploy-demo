import { Routes } from '@angular/router';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Home } from './pages/home/home';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'quienes-somos', component: QuienesSomos},
    {path: 'inicio-sesion', component: InicioSesion},
    {path:"", redirectTo:"/home", pathMatch:"full"}
];

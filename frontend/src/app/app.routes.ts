import { Routes } from '@angular/router';
import { SegundaPagina } from './pages/segunda_pagina/segunda-pagina/segunda-pagina';

import { Home } from './components/home/home';
import { PrimerPagina } from './pages/primera_pagina/primer-pagina/primer-pagina';
import { CuartaPaginaLogin } from './pages/cuarta-pagina-login/cuarta-pagina-login';
import { Register } from './pages/register/register';

export const routes: Routes = [
    
    { path: '', title: 'Primer página', component: Home, },
    { path: 'primer_pagina', title: 'Primera página', component: PrimerPagina, },
    { path: 'segunda_pagina', title: 'Segunda página', component: SegundaPagina, },
    { path: 'tercera_pagina', title: 'Tercera página', loadComponent: () => import('./pages/tercera_pagina/tercera-pagina/tercera-pagina').then(m => m.TerceraPagina), },
    { path: 'cuarta-pagina-login', title: 'Cuarta página', component: CuartaPaginaLogin, },
    { path: 'registro', title: 'Registro', component: Register, },

];

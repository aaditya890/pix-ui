import { Routes } from '@angular/router';
import { OUR_ROUTES } from './routes/define-routes';


export const routes: Routes = [
    {
        path:OUR_ROUTES.introduction,
        loadComponent: ()=> import('../app/intro/intro.component').then((m) => m.IntroComponent)
    },
    {
        path:OUR_ROUTES.footer,
        loadComponent: ()=> import('../app/components/footer-ui/footer-ui.component').then((m) => m.FooterUiComponent)
    },
    {
        path:OUR_ROUTES.heroSection,
        loadComponent: ()=> import('../app/components/hero-section-ui/hero-section-ui.component').then((m) => m.HeroSectionUiComponent)
    },
    {
        path:OUR_ROUTES.teamSection,
        loadComponent: ()=> import('.././app/components/team-section-ui/team-section-ui.component').then((m) => m.TeamSectionUiComponent)
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:OUR_ROUTES.introduction
    }
];

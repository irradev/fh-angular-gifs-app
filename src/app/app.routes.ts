import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        // loadComponent: () => import('./gifs/pages/dashboard/dashboard').then(c => c.Dashboard)
        loadComponent: () => import('./gifs/pages/dashboard/dashboard'),
        children: [
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search/search')
            },
            {
                path: 'search-history/:query',
                loadComponent: () => import('./gifs/pages/search-history/search-history')
            },
            {
                path: 'trending',
                loadComponent: () => import('./gifs/pages/trending/trending')
            },
            {
                path: '**',
                redirectTo: 'trending'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

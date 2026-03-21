import { GifsFacade } from '@/app/gifs/facade/gifs-facade';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}
@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {
  public menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];

  public readonly gifsFacade = inject(GifsFacade);




}

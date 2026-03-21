import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu';

@Component({
  selector: 'dashboard-page',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dasbhoard.html',
})
export default class Dashboard { }

import { Component } from '@angular/core';
import { NavItem } from '../../models/nav-item.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly navItems: NavItem[] = [{
    label: 'Dashboard',
    route: '/dashboard',
    icon: 'bi-speedometer2'
  },{
    label: 'Product',
    route: '/products',
    icon: 'bi-journal-text'
  },{
    label: 'Orders',
    route: '/orders',
    icon: 'bi-exclamation-triangle'
  },{
    label: 'Cart',
    route: '/cart',
    icon: 'bi-folder2-open'
  },{
    label: 'Analytics',
    route: '/analytics',
    icon: 'bi-bar-chart'
  }];
}

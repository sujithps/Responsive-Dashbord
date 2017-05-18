import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component'; 
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component'; 
import { MapsComponent } from './maps/maps.component'; 

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'maps', component: MapsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    NotificationsComponent,
    MapsComponent
]

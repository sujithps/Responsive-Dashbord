"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var table_component_1 = require('./table/table.component');
var notifications_component_1 = require('./notifications/notifications.component');
var maps_component_1 = require('./maps/maps.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    notifications_component_1.NotificationsComponent,
    maps_component_1.MapsComponent
];
//# sourceMappingURL=dashboard.routes.js.map
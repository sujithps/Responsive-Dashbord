import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
//import initDataTable = require('../../../assets/js/initDataTable.js'); 

declare function initDataTable(): any;

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    ngOnInit(){
	    $.getScript('../../../assets/js/initDataTable.js');
    }
}

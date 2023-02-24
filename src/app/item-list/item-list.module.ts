import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemListComponent} from './components/item-list/item-list.component';
import {RouterModule} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import {CardItemModule} from "../shared/card-item/card-item.module";

const routes = [
  {
    path: 'items',
    component: ItemListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    CardItemModule
  ],
  declarations: [ItemListComponent],
})

export class ItemListModule {
}

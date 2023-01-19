import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
//import { ProductsComponent } from './products.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  //local host:4200/products path - AllProductsComponent
  { path: '', component:AllProductsComponent },
  //local host:4200/products/cart path - cart Component
  {path:'cart', component:CartComponent},
 //local host:4200/products/wish-list path - WishListComponent
  {path:'wish-list', component:WishListComponent}
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

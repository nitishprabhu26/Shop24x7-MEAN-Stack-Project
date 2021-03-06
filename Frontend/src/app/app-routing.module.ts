import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './components/footer/footer.component'
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { ProductsComponent } from './components/products/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { AuthGuard } from './guard/auth.guard';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageOrderComponent } from './components/manage-order/manage-order.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomepageComponent },
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginPageComponent,
    canActivate: [AuthGuard], //can't go to login unless not authenticated
  },
  {path: 'register', component: RegisterPageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', children:[
    {path: 'add-new-product', component: AddNewProductComponent},
    {path: 'products', component: ManageProductsComponent},
    {path: 'admin/orders', component: ManageOrderComponent},
    {path: 'products/:product_id/edit', component: EditProductComponent}
  ], 
    canActivate: [AuthGuard],
    data: {role: "admin"} //only admin can access
  },
  {path: 'products', children:[
    {path: '', component: ProductsComponent},
    {path: ':product_id', component: ProductComponent}
  ]},
  {path: 'categories/:category_id', component: CategoryComponent},
  {path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard] //authenticated to access
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

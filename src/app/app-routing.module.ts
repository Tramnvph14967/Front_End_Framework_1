import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';

import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductsComponent } from './components/product/products/products.component';
import { SigninComponent } from './components/signin/signin.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminGuard } from './services/aguards/admin.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "product", component: ProductsComponent },
  { path: "product/add", component: ProductAddComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductAddComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SigupComponent},
  // {
  //   path: "product", canActivate: [AdminGuard], children: [
  //     { path: "", redirectTo: 'list', pathMatch: 'full' },
  //     { path: 'list', component: ProductsComponent },
  //     { path: "add", component: ProductAddComponent },
  //     { path: ":id", component: ProductDetailComponent },
  //     { path: "edit/:id", component: ProductAddComponent }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//angular material Imports
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule  } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';






import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TemplateUserFormComponent } from './components/template-user-form/template-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveUserFormComponent } from './components/reactive-user-form/reactive-user-form.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CheckLoginGuard } from './guards/shared/check-login.guard';

//routes Array
const routes: Routes = [
  {
    path:'',
    redirectTo:'list-products',
    pathMatch:'full'
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    //redirectTo: 'edit-product',
    pathMatch: 'full',
  },
  {
    path: 'edit-product',
    component: EditProductComponent,
    pathMatch: 'full',
    canActivate:[CheckLoginGuard]
  },
  //parametrized route
  {
    path: 'view-product/:productId',
    component: ViewProductComponent,
    pathMatch: 'full',
  },
  //named outlet incase of multiple router outlets.
  {
    path: 'list-products',
    component: ListProductsComponent,
    pathMatch: 'full',
    //outlet: 'listProducts'
  },
  //wildcard route
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];

// const modules = [

// ]
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TemplateUserFormComponent,
    ReactiveUserFormComponent,
    AddProductComponent,
    ViewProductComponent,
    ListProductsComponent,
    EditProductComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    //Angular material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,


    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

    //Angular material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ]
})
export class AppModule {}

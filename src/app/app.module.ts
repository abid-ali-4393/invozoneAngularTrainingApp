import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TemplateUserFormComponent } from './components/template-user-form/template-user-form.component';
import { ReactiveUserFormComponent } from './components/reactive-user-form/reactive-user-form.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CheckLoginGuard } from './guards/shared/check-login.guard';
import { MaterialModule } from './material/material.module';

//import { MaterialPracticeButtonsComponent } from './components/materialDesign/material-practice-buttons/material-practice-buttons.component';
import { MaterialPracticeNavbarComponent } from './components/materialDesign/material-practice-navbar/material-practice-navbar.component';
import { MaterialPracticeFormComponent } from './components/materialDesign/material-practice-form/material-practice-form.component';
import { MaterialPracticeDataTableComponent } from './components/materialDesign/material-practice-data-table/material-practice-data-table.component';
import { MatCustomDialogComponent } from './components/Dialogs/mat-custom-dialog/mat-custom-dialog.component';
import { ServiceDemoComponent } from './components/servicesPractice/service-demo/service-demo.component';
import { PostDemoComponent } from './components/servicesPractice/post-demo/post-demo.component';

// routes Array
const routes: Routes = [
  {
    path: '',
    redirectTo: 'material-part-button',
    pathMatch: 'full',
  },
  // {
  //   path: 'material-part-button',
  //   component: MaterialPracticeButtonsComponent,
  //   pathMatch: 'full',
  // },
  {
    path: 'material-part-navbar',
    component: MaterialPracticeNavbarComponent,
    pathMatch: 'full',
  },
  {
    path: 'material-part-form',
    component: MaterialPracticeFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'service-demo',
    component: ServiceDemoComponent,
    pathMatch: 'full',
  },

  {
    path: 'add-product',
    component: AddProductComponent,
    // redirectTo: 'edit-product',
    pathMatch: 'full',
  },
  {
    path: 'edit-product',
    component: EditProductComponent,
    pathMatch: 'full',
    canActivate: [CheckLoginGuard],
  },
  // parametrized route
  {
    path: 'view-product/:productId',
    component: ViewProductComponent,
    pathMatch: 'full',
  },
  // named outlet incase of multiple router outlets.
  {
    path: 'list-products',
    component: ListProductsComponent,
    pathMatch: 'full',
    // outlet: 'listProducts'
  },
  // wildcard route
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
    //MaterialPracticeButtonsComponent,
    MaterialPracticeNavbarComponent,
    MaterialPracticeFormComponent,
    MaterialPracticeDataTableComponent,
    MatCustomDialogComponent,
    ServiceDemoComponent,
    PostDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,

    RouterModule.forRoot(routes),

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

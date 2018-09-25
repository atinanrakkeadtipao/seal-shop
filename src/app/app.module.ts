import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TitlePipe } from './title.pipe';
import { BgColorDirective } from './bg-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductListComponent,
    TitlePipe,
    BgColorDirective,
    AboutComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,
    
    RouterModule.forRoot([
      {
      path: "cart", component: ShoppingCartComponent
      },
      {
        path: "", component: ProductListComponent
      },
      {
        path: "about", component: AboutComponent
      },
      {
        path: "contact", component: ContactComponent
      }
    

  ]),
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

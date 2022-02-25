import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';
import { SearchItemService } from './search-item.service';
import { RandomRecipeService } from './random-recipe.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      
      { path: 'searchPage', component: SearchPageComponent },
    ]),
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthenticateService,
  SearchItemService,
  RandomRecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

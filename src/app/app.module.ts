import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApiService } from './core/service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './components/recipe/recipe.component';
import { InfoMessageComponent } from './components/info-message/info-message.component';
import { OnSelectComponent } from './pages/on-select-ricepe/on-select.component';
import { NotificationForBasketComponent } from './components/basket-of-recipes/notification-for-basket/notification-for-basket.component';
import { BasketComponent } from './components/basket-of-recipes/basket/basket.component';
import { FilterComponent } from './components/filter/Search-filter/filter.component';
import {MatIconModule} from '@angular/material/icon'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    RecipeComponent,
    InfoMessageComponent,
    OnSelectComponent,
    NotificationForBasketComponent,
    BasketComponent,
    FilterComponent


  ],
  imports: [
    MatIconModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

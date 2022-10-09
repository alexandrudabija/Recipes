import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApiService } from './core/service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './components/recipe/recipe.component';
import { InfoMessageComponent } from './components/info-message/info-message.component';
import { OnSelectComponent } from './pages/on-select-ricepe/on-select.component';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateComponent } from './components/translate/translate.component';
import { NotificationForBasketComponent } from './components/basket-of-recipes/notification-for-basket/notification-for-basket.component';
import { BasketComponent } from './components/basket-of-recipes/basket/basket.component';
import { FilterComponent } from './components/filter/Search-filter/filter.component';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    RecipeComponent,
    InfoMessageComponent,
    OnSelectComponent,
    TranslateComponent,
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
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    // }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http);
// }

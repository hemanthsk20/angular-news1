import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NewsComponent ],
  entryComponents: [],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }



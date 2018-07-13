import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsService } from './items.service';
import { RoutingModule } from './routing/routing.module';
import { SingleComponent } from './home/single/single.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule, FormsModule,RoutingModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

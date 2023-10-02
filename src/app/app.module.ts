import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentComponent } from './components/component/component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { StartComponent } from './components/start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListUsersComponent } from './components/dashboard/list-users/list-users.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { SpinnerComponent } from './components/spinner/spinner.component'

@NgModule({
  declarations: [
    AppComponent,
    componentComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
    StartComponent,
    PageNotFoundComponent,
    ListUsersComponent,
    UserComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboaardComponent } from './commponents/dashboaard/dashboaard.component';
import { ClientsComponent } from './commponents/clients/clients.component';
import { ClientDetailsComponent } from './commponents/client-details/client-details.component';
import { AddClientComponent } from './commponents/add-client/add-client.component';
import { EditClientComponent } from './commponents/edit-client/edit-client.component';
import { NavbarComponent } from './commponents/navbar/navbar.component';
import { SidebarComponent } from './commponents/sidebar/sidebar.component';
import { LoginComponent } from './commponents/login/login.component';
import { RegisterComponent } from './commponents/register/register.component';
import { SettingsComponent } from './commponents/settings/settings.component';
import { PageNotFoundComponent } from './commponents/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', component: DashboaardComponent }
  { path: 'register', component: RegisterComponent }
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboaardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

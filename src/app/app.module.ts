import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';


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

import { ClientService } from './services/client.service';

const appRoutes: Routes = [
  { path: '', component: DashboaardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent }
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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

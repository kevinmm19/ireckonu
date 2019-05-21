import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { FactsComponent } from './components/facts/facts.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { ProfileDetailTableComponent } from './components/profile-detail-table/profile-detail-table.component';
import { ProfileIdsComponent } from './components/profile-ids/profile-ids.component';
import { ActivityTimelineComponent } from './components/activity-timeline/activity-timeline.component';
import { ProfileNavComponent } from './components/profile-nav/profile-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersTableComponent,
    ProfilesComponent,
    ProfileComponent,
    LoadingComponent,
    SearchComponent,
    FactsComponent,
    ProfileDetailComponent,
    ProfileDetailTableComponent,
    ProfileIdsComponent,
    ActivityTimelineComponent,
    ProfileNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

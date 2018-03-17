import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModalDirective } from './modal.directive';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchGridComponent } from './components/search-grid/search-grid.component';
import { SearchService } from './services/search.service';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ModalDirective,
    SearchComponent,
    SearchGridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: false}),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

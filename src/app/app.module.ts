import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddButtonComponent } from './add-button/add-button.component';
import { AddDialog } from './add-button/add-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { DeleteDialog } from './delete-button/delete-button.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
	AddDialog,
    DeleteButtonComponent,
    TableComponent,
	DeleteDialog
  ],
  imports: [
    BrowserModule,
	FormsModule,
    BrowserAnimationsModule,
	MatFormFieldModule,
	MatToolbarModule,
	MatCardModule,
	MatIconModule,
	MatButtonModule,
	MatTableModule,
	MatDialogModule,
	ReactiveFormsModule,
	MatInputModule,
	MatSelectModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

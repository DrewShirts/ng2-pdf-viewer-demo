import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { PdfComponent } from './components/pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [PdfComponent]
})
export class AppModule { }

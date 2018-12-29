import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label> Pdf src </label>
      <input (change)="onFileSelected()" type="file" id="file">
      <input [(ngModel)]="page" type="text" id="page">
    </div>
    <pdf-viewer [src]="pdfSrc"
      [render-text]="true"
      [page]="page"
      [show-all]="true"
      style="display: block;"></pdf-viewer>
  `,
  styles: []
})
export class PdfComponent implements OnInit {

  page: number = 1;
  pdfSrc: string = '';

  constructor() { }

  ngOnInit() {
    this.pdfSrc
  }

  onFileSelected() {
    let img: any = document.querySelector('#file');

    if (typeof (FileReader) !== undefined) {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer(img.files[0]);
    }
  }
}

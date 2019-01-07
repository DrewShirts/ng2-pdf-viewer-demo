import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  getPDF(): string {
    return 'assets/example.pdf';
  }
}

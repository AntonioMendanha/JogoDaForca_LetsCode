import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretWordService {
  
  constructor() { }

  getWordsList() {
    return ["baralho", "casa"];
  }
}

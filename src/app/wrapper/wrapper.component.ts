import { Component, OnInit } from '@angular/core';
import { SecretWordService } from '../secret-word.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  wordsList: string[];
  jogadas: string[];
  secretWord: Array<string> = [""];
  hiddenWord: Array<string> = [""];
  isCorrect: string = "";


  constructor(private secretWordService: SecretWordService) {
    this.wordsList = this.secretWordService.getWordsList();
    this.jogadas = [];
   }

  ngOnInit(): void {
  }

  add(jogada: any) {
    //let hidden_word = this.hiddenWord
    //let secret_word = this.secretWord
    let secret_word = ['b','a','r','a','l','h','o']

    this.jogadas.push(jogada)
    this.verifyLetterInWord(jogada, this.hiddenWord, secret_word )

    return this.hiddenWord;
  }
  
  newGame(list: string[]) {
    //mudar classe do botão para habilitar
    this.jogadas = [];
    return (
      this.getSecretWord(list),
      this.getNewHiddenWord(this.secretWord)
    )
  }

  getSecretWord(list: string[]) {
    let secret = list[0].toString().split("")
    this.secretWord = secret
    return (
      console.log(this.secretWord),
      this.secretWord
      )
  }
  getNewHiddenWord(word: any) {
    for (let i = 0; word.length > i ; i++) {
      word[i] = ""
    }
    return this.hiddenWord = word
  }

  verifyLetterInWord(letter: any, hidden_word: any, secret_word: any) {
    console.log(secret_word)
    for (let i = 0; secret_word.length > i; i++) {
      if (letter == secret_word[i]) {
        hidden_word[i] = letter
      }
    }
    return hidden_word;
  }

}

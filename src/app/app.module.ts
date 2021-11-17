import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ResultComponent } from './result/result.component';
import { SecretWordService } from './secret-word.service';
import { CorrectLetterDirective } from './correct-letter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    ResultComponent,
    CorrectLetterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SecretWordService],
  bootstrap: [AppComponent]
})
export class AppModule { }

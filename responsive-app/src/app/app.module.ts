// Example: src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// Assuming HeaderModule and FooterModule declare/export HeaderComponent and FooterComponent
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
// OR if they are in a shared module
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule, // <-- Add this
    FooterModule, // <-- Add this
    // OR SharedModule <-- Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
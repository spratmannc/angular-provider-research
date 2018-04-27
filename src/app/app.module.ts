import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { MyBox } from "./components/box/box";
import { ThemeProvider } from "./services/theme.provider";
import { CurrentUserProvider } from "./services/user.provider";



@NgModule({
  declarations: [
    AppComponent,
    MyBox
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CurrentUserProvider,
    ThemeProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

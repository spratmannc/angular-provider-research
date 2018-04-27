import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { MyBox } from "./components/box/box";
import { ThemeProvider } from "./services/theme.provider";
import { CurrentUserProvider } from "./services/user.provider";
import { DynamicContainer } from "./components/dyncomp/dynamic";
import { FormA } from "./components/forms/forma";
import { FormB } from "./components/forms/formb";



@NgModule({
  declarations: [
    AppComponent,
    MyBox,
    DynamicContainer,
    FormA,
    FormB
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CurrentUserProvider,
    ThemeProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormA,
    FormB
  ]
})
export class AppModule { }

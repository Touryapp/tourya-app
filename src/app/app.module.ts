import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared-module";
import { LoginTouristComponent } from "./auth/login-tourist/login-tourist.component";
import { LoginProviderComponent } from "./auth/login-provider/login-provider.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { RegisterTouristComponent } from "./auth/register-tourist/register-tourist.component";
import { RegisterTouristEmailComponent } from "./auth/register-tourist-email/register-tourist-email.component";
import { RegisterProviderComponent } from "./auth/register-provider/register-provider.component";
import { RegisterProviderEmailComponent } from "./auth/register-provider-email/register-provider-email.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginTouristComponent,
    LoginProviderComponent,
    ForgotPasswordComponent,
    RegisterTouristComponent,
    RegisterTouristEmailComponent,
    RegisterProviderComponent,
    RegisterProviderEmailComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

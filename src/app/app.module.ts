import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared-module";
import { LoginTouristComponent } from "./auth/login-tourist/login-tourist.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { RegisterTouristComponent } from "./auth/register-tourist/register-tourist.component";
import { RegisterTouristEmailComponent } from "./auth/register-tourist-email/register-tourist-email.component";
import { ChangePasswordComponent } from "./auth/change-password/change-password.component";
import { NgScrollbarModule } from "ngx-scrollbar";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { environment } from "../environments/environment";
import { AuthInterceptor } from "./core/interceptors/auth.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

// Inicializar Firebase
const app = initializeApp(environment.firebaseConfig);
export const auth = getAuth(app);

@NgModule({
  declarations: [
    AppComponent,
    LoginTouristComponent,
    ForgotPasswordComponent,
    RegisterTouristComponent,
    RegisterTouristEmailComponent,
    ChangePasswordComponent,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    NgScrollbarModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

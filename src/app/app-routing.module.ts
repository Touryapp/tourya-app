import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { RegisterTouristComponent } from "./auth/register-tourist/register-tourist.component";
import { LoginTouristComponent } from "./auth/login-tourist/login-tourist.component";
import { RegisterTouristEmailComponent } from "./auth/register-tourist-email/register-tourist-email.component";
import { ChangePasswordComponent } from "./auth/change-password/change-password.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },

  {
    path: "register-tourist",
    component: RegisterTouristComponent,
  },
  {
    path: "register-tourist-email",
    component: RegisterTouristEmailComponent,
  },
  {
    path: "change-password",
    component: ChangePasswordComponent,
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "login",
    component: LoginTouristComponent,
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { RegisterTouristComponent } from "./auth/register-tourist/register-tourist.component";
import { LoginTouristComponent } from "./auth/login-tourist/login-tourist.component";
import { LoginProviderComponent } from "./auth/login-provider/login-provider.component";
import { RegisterTouristEmailComponent } from "./auth/register-tourist-email/register-tourist-email.component";
import { RegisterProviderComponent } from "./auth/register-provider/register-provider.component";
import { RegisterProviderEmailComponent } from "./auth/register-provider-email/register-provider-email.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "login-tourist",
    component: LoginTouristComponent,
  },
  {
    path: "login-provider",
    component: LoginProviderComponent,
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
    path: "register-provider",
    component: RegisterProviderComponent,
  },
  {
    path: "register-provider-email",
    component: RegisterProviderEmailComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

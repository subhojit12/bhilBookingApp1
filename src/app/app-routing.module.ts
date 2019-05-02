import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BookComponent } from './book/book.component';
import { PaymentComponent } from './payment/payment.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'purchase',
    component: PurchaseComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'book/:id',
    component: BookComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HotToastModule } from '@ngneat/hot-toast';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserModule } from '@angular/platform-browser';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { FooterComponent } from './footer/footer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { AccountmanaComponent } from './accountmana/accountmana.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

import { ChartModule } from 'angular-highcharts';


import { SelectsComponent } from './selects/selects.component';

import { AboutComponent } from './about/about.component';
import{NewsComponent} from './news/news.component';
import { GerepComponent } from './gerep/gerep.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { NgChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderrComponent } from './headerr/headerr.component';
import { MainComponent } from './main/main.component';
import { SalesbycategoryComponent } from './salesbycategory/salesbycategory.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBoxes, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleCasePipe } from '@angular/common';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    FooterComponent,
    AccountmanaComponent,
    CartComponent,
    ContactComponent,
    DetailsComponent,
    HomeComponent,
   NewsComponent,
    SelectsComponent,
    AboutComponent,
    HeaderComponent,
    GerepComponent,
    MenuComponent,
    HeaderrComponent,
    MainComponent,
    SalesbycategoryComponent,
    TopThreeProductsComponent,
    TopWidgetsComponent,
    LastFewTransactionsComponent,
    DashboardComponent,
    AdminsignupComponent,
    AdminAddProductComponent,
    AdminUpdateComponent,
    AdminHomeComponent,
    SalesByMonthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    HttpClientModule,
    MatChipsModule,
    FontAwesomeModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    ChartModule,
 MatSelectModule ,
 MatSidenavModule ,
 MatSliderModule ,
 MatSlideToggleModule,
 MatSnackBarModule  ,
MatSortModule ,
 MatStepperModule ,
MatTabsModule ,
MatTableModule,
CommonModule,
MatListModule,
  MatToolbarModule ,
 MatTooltipModule ,
 MatTreeModule ,
 MatListModule,
 NgChartsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,

    MatIconModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatAutocompleteModule,

    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    LayoutModule,
  ],
  providers: [AuthService,TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

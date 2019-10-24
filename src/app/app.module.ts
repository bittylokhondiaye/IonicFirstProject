import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }  from '@angular/common/http';
import { MatButtonToggleModule,MatIconModule,MatToolbarModule,MatCardModule,MatInputModule,
         MatFormFieldModule,MatOptionModule  } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            JwtModule,
            HttpClientModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatCheckboxModule,
            MatButtonToggleModule,
            MatIconModule,
            MatToolbarModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatOptionModule,
            MatSelectModule,
            MatMenuModule,
            ReactiveFormsModule,
            FormsModule,
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

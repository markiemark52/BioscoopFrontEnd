import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ProfileGuard } from './guards/profile.guard';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
    declarations: [/*LoginComponent*/],
    providers: [
        AuthGuard,
        AuthService,
        ProfileGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AuthModule { }
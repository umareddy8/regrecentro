///<reference path="./../../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserAccountComponent } from './user-account-component';
import { UserAccountService } from './user-account-service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [UserAccountComponent],
    bootstrap: [UserAccountComponent],
    providers: [UserAccountService]
})
export class UserAccountModule { }    
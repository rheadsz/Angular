import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
    ]
})
export class AuthModule{

}
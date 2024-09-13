import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  color1: string = "#fff";
  value: number = 10;
  strength:number = 0;
  strengthValue: string = '';
  checkUp: boolean = false;
  checkLow: boolean = false;
  checkNum: boolean = false;
  checkSym: boolean = false;
  generatedPassword: string = '';

  GenerateStrength(){
    this.strength=0;
    if(this.value>10){this.strength=1;}
    if(this.checkLow){this.strength++}
    if(this.checkNum){this.strength++}
    if(this.checkSym){this.strength++}
    if(this.checkUp){this.checkUp}

    if(this.strength==0 || this.strength==1){this.strengthValue="POOR"}
    if(this.strength==2){this.strengthValue="WEAK"}
    if(this.strength==3){this.strengthValue="MODERATE"}
    if(this.strength==4){this.strengthValue="STRONG"}


  }

  OnSubmit(){
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
 
    let charSet = '';
    if (this.checkUp) charSet += uppercaseChars;
    if (this.checkLow) charSet += lowercaseChars;
    if (this.checkNum) charSet += numberChars;
    if (this.checkSym) charSet += symbolChars;
 
    this.generatedPassword = Array.from({ length: this.value })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');
 
      this.GenerateStrength();
  }
}

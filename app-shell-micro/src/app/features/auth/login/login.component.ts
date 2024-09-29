import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule, NgxIntlTelInputModule],
//   template: `
//     <form (ngSubmit)="onSubmit()">
//       <ngx-intl-tel-input
//         [cssClass]="'custom'"
//         [preferredCountries]="preferredCountries"
//         [enableAutoCountrySelect]="true"
//         [enablePlaceholder]="true"
//         [searchCountryFlag]="true"
//         [searchCountryField]="[SearchCountryField.Iso2, SearchCountryField.Name]"
//         [selectFirstCountry]="false"
//         [selectedCountryISO]="CountryISO.UnitedStates"
//         [maxLength]="15"
//         [phoneValidation]="true"
//         [separateDialCode]="true"
//         [numberFormat]="PhoneNumberFormat.National"
//         name="phone"
//         [(ngModel)]="phoneNumber"
//         #phoneInput="ngModel"
//       ></ngx-intl-tel-input>
//       <div *ngIf="phoneInput.invalid && (phoneInput.dirty || phoneInput.touched)" class="error-message">
//         Please enter a valid phone number.
//       </div>
//       <button type="submit" [disabled]="phoneInput.invalid">Add Phone Number</button>
//     </form>
//     <div *ngIf="phoneNumbers.length > 0">
//       <h3>Added Phone Numbers:</h3>
//       <ul>
//         <li *ngFor="let number of phoneNumbers">{{ number }}</li>
//       </ul>
//     </div>
//   `,
//   styles: [`
//     .custom {
//       width: 300px;
//     }
//     .error-message {
//       color: red;
//       font-size: 12px;
//     }
//   `]
// })
// export class LoginComponent {
//   SearchCountryField = SearchCountryField;
//   CountryISO = CountryISO;
//   PhoneNumberFormat = PhoneNumberFormat;
//   preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

//   phoneNumber: string = '';
//   phoneNumbers: string[] = [];

//   onSubmit() {
//     if (this.phoneNumber) {
//       this.phoneNumbers.push(this.phoneNumber);
//       this.phoneNumber = '';
//     }
//   }
// }

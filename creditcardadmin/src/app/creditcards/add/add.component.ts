import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor (private CreditcardsService:CreditcardsService,
    private router:Router){
  }
  newCreditCard: CreditCard= {
    id: undefined,
    name: "",
    description: "",
    bankName: "",
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: "100-500",
    annualFee: 12,
    termsAndConditions: "Terms and conditions for the credit card.",
    createdDate: Date(),
    updatedDate: Date()
  }
  
  saveCreditCard(){
    console.log("Form submitted");
  this.CreditcardsService.createCreditCard(this.newCreditCard).subscribe(data =>
    {

      alert("Credit card added");
      this.router.navigate(['creditcards']);
    })
  
  //console.log(this.newCreditCard);}
}
}
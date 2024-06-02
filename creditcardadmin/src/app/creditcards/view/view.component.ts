import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  creditCardDetails!: CreditCard;
  creditCardId!: Number;
  private destroy$: Subject<void> = new Subject<void>();
  

  constructor(private creditCardsService: CreditcardsService,
    private snackBar: MatSnackBar,
     private router: ActivatedRoute) {
      this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || ''); 

    this.creditCardsService.getCreditCardById(this.creditCardId).pipe(takeUntil(this.destroy$)).subscribe((data: CreditCard) =>{
      this.showSuccessMessage("Credit Card Loaded successfully");
       this.creditCardDetails = data;
    })
}showSuccessMessage(message: string){
  this.snackBar.open(message, 'Close', {
    duration: 3000
  })
}

ngOnDestroy(){
  this.destroy$.next();
  this.destroy$.complete();
}

}

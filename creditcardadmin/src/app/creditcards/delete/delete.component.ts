import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  creditCardId!: Number;

  constructor(private router: ActivatedRoute,
    private route: Router,
    private creditcardsService: CreditcardsService) {
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || ''
    );
  
    this.creditcardsService.deleteCreditCard(this.creditCardId).subscribe(data => {
       alert("Credit card deleted");
       this.route.navigate(['creditcards']);
    })
  }
  }


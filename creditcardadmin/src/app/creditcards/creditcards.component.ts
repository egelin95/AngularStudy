import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const TABLE_DATA: CreditCard[] = [
  {id: 1,
    name: 'Bank of AMerica',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the tersm and conditions",
    createdDate: '2024-26-05',
    updatedDate: '2024-26-05'

  },
  {id: 2,
    name: 'Bank of AMerica',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the tersm and conditions",
    createdDate: '2024-26-05',
    updatedDate: '2024-26-05'

  },
  {id: 3,
    name: 'Bank of AMerica',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the tersm and conditions",
    createdDate: '2024-26-05',
    updatedDate: '2024-26-05'

  },
  {id: 2,
    name: 'Bank of AMerica',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the tersm and conditions",
    createdDate: '2024-26-05',
    updatedDate: '2024-26-05'

  },
  {id: 2,
    name: 'Bank of AMerica',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the tersm and conditions",
    createdDate: '2024-26-05',
    updatedDate: '2024-26-05'

  },
  {id: 2,
    name: 'Bank of AMerica',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the tersm and conditions",
    createdDate: '2024-26-05',
    updatedDate: '2024-26-05'

  },


]


@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {
displayColumns = ["select", "id",  "name","description", "bankName","maxCredit","interestRate","active", "recommendedScore"]

dataSource = new MatTableDataSource(TABLE_DATA);

selection = new SelectionModel(true, []);

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!:MatSort;

ngAfterViewInit(){
  this.dataSource.paginator =this.paginator;
  this.dataSource.sort = this.sort;
}

selectHandler(row: CreditCard){
  this.selection.toggle(row as never);
}
}

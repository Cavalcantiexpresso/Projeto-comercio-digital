import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService,
    private router: Router) { }


  ngOnInit(): void {
    this.seller.reloadSeller()

  }

  signUp(data: signUp): void {

    this.seller.userSignUp(data)
  }

}

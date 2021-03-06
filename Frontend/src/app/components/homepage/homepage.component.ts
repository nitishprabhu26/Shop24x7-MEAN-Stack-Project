import { Component, OnInit } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  bannerList: any;
  categoriesList: any;
  productsList: any;


  constructor(private _homepageService : HomepageService) { }

  ngOnInit(): void {

    this._homepageService.getBannerList().subscribe(res => {
      if (res.status == "success"){
        this.bannerList = res.products

      }
    });

    this._homepageService.getCategoriesList().subscribe(res => {
      if (res.status == "success"){
        this.categoriesList = res.categories

      }
    });

    this._homepageService.getProductsList().subscribe(res => {
      if (res.status == "success"){
        this.productsList = res.products

      }
    });

  }

  addToCart(product:any){
    
    this._homepageService.addToCart(product).subscribe(res => {
      if (res.status == "success"){
        alert('Added the product to the cart successfully ')

      }
  })
}
  
}

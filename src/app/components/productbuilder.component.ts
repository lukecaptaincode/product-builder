import {Component, OnInit} from '@angular/core';
import {ProductBuilderModule} from "./productbuilder.module";
import {HttpClient} from '@angular/common/http';
import {Product} from './Product';

@Component({
    selector: 'product-builder',
    templateUrl: './productbuilder.component.html',
    styleUrls: ['./productbuilder.component.scss']
})

export class ProductBuilderComponent implements OnInit {
    productBuilder: ProductBuilderModule;
    products: any;
    productObj = new Product();

    constructor(private http: HttpClient) {
        this.productBuilder = new ProductBuilderModule();
    }

    getProductFileData() {
        this.productBuilder.getProductFileFromServer(this.http).then((response) => {
            this.products = response;
        });
    }

    ngOnInit() {
        this.getProductFileData();
    }

    updateProductsFile() {
        this.productBuilder.updateProductFileOnServer(this.http, this.productObj);
    }

}
import {NgModule} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@NgModule({
    providers: [],
})
export class ProductBuilderModule {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    getProductFileFromServer(http: HttpClient) {
        return new Promise((productData) => {
            http.get('http://localhost:1337/').subscribe((response: any) => {
                productData(response);
            });
        });
    }


    updateProductFileOnServer(http: HttpClient, product: object) {
        http.post('http://localhost:1337/update', product, this.httpOptions)
            .subscribe((response: any) => {
                console.log(response);
            });

    }
}
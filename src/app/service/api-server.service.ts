import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

    // Auth Token
    private authToken = '';
    // APIサーバーのベースURL
    private baseUrl = '';
    // リクエストヘッダ
    private headers = new HttpHeaders({
      'x-cdata-authtoken': this.authToken
    });

  constructor(private httpClient: HttpClient) { }

  public getCustomers() {
    // HttpClientを利用し、APIサーバーにアクセス
    return this.httpClient.get<CustomersResponse>(
      `${this.baseUrl}/`, {headers: this.headers})
    .pipe(
      // エラー時の処理
      catchError(this.handleError('getData:Customer', [])),
      // 返されたデータからCustomerの配列を取得
      map(response =>  (response as CustomersResponse).value)
    );
  }

  // Error時の処理。デモ用に簡略化
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): string => {
      console.error('An error occurred', error);
      return error;
    };
  }
}

// response
interface CustomersResponse {
  value: Customer[];
}

// customer
export interface Customer {
  rowguid: string; // "3f5ae95e-b87d-4aed-95b4-c3797afcb74f"
  LastName: string; // "Gee"
  PasswordHash: string; // "L/Rlwxzp4w7RWmEgXX+/A7cXaePEPcp+KwQhl2fJL7w="
  Suffix: string; // null
  Title: string; // "Mr."
  EmailAddress: string; // "orlando0@adventure-works.com"
  Phone: string; // "245-555-0173"
  CustomerID: string; // 1
  PasswordSalt: string; // "1KjXYs4="
  SalesPerson: string; // "adventure-works\\pamela0"
  GUID: string; // "3F5AE95EB87D4AED95B4C3797AFCB74F"
  CompanyName: string; // "A Bike Store"
  FirstName: string; // "Orlando"
  NameStyle: boolean;	// false
  MiddleName: string; // "N."
  ModifiedDate: Date; // "2005-08-01T00:00:00.0000+00:00"
}

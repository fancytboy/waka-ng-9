import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'angular-custom-modal';
import { CrudService } from '../services/crud.service';
import { Customer } from '../types/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerComponent implements OnInit {

  @ViewChild('htmlInsideModal') htmlInsideModal: ModalComponent;

  constructor(public crudService: CrudService) { }
  listCustomers: Customer[] = [];
  customer: Customer

  ngOnInit(): void {
    this.crudService.read().subscribe(res => {
      console.log(res)
      this.listCustomers = res
    })
  }

  openModal(id: any) {
    this.crudService.find(id).subscribe(res => {
      console.log(res)
      this.customer = res;
    })
    this.htmlInsideModal.open();
  }
  
  createCustomer(f: string, l: string, e: string, p: string, a: string){
    const customer: Customer = {
      first_name: f,
      last_name: l,
      email: e,
      phone: p,
      age: a
    }
    this.crudService.create(customer);
  }

  deleteCustomer(id: any){
    this.crudService.delete(id)
  }

  updateCustomer(i: any, f: string, l: string, e: string, p: string, a: string){
    const customer: Customer = {
      first_name: f,
      last_name: l,
      email: e,
      phone: p,
      age: a
    }
    this.crudService.update(i, customer);
    this.htmlInsideModal.close()
  }

}

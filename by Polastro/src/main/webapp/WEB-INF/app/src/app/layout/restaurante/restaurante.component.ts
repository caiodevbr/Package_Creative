import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss']
})
export class RestauranteComponent {

  nome: string;
  endereco: string;

  constructor() { }

  ngOnInit() {
  }

}

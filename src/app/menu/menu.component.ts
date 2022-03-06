import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;

  selectedDish: Dish = DISHES[0];

  constructor() {}

  ngOnInit(): void {}
}

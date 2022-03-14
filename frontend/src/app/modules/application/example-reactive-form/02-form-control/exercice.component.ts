import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  name = new FormControl('');
  releaseDate = new FormControl('');
  franchise = new FormControl('');
  budget = new FormControl('');
  
  summary = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.updateControls();
  }

  updateControls(): void {
    this.name.setValue('Vache');
    this.releaseDate.setValue('26/04/2019');
    this.franchise.setValue(true);
    this.budget.setValue('356000000');
    
    this.summary.setValue('Pour fournir au marché, le lait, le fromage, la crème et le beurre, on enlève le veau à sa mère à peine quelques jours après sa naissance, et parfois immédiatement.');
  }

  resetControls(): void {
    this.name.setValue(null);
    this.releaseDate.setValue(null);
    this.franchise.setValue(null);
    this.budget.setValue(null);
   
    this.summary.setValue(null);
  }

}

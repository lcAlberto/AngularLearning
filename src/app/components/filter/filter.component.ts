import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>()

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  filters: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    { label: 'Todos', value: undefined },
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false },
  ];

  sendFilter () {
    this.onFilterEmitt.emit(this.filters);
  }
}

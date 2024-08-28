import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user-interface';
import { Users } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-interface';
import { FilterUserList } from '../../utils/FilterUserList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  filteredList: IUser[] = [];
  selectedUser: IUser = {} as IUser;

  ngOnInit(): void {
    console.log('start');
    setTimeout(() => {
      console.log('dpois');
      this.usersList = Users;
      this.filteredList = Users;
    }, 1000);
  }

  setSelectedUser(user: IUser) {
    this.selectedUser = user;
  }

  onFilter(filter: IFilterOptions) {
    console.log(filter);

    this.filteredList = FilterUserList(filter, this.usersList);
  }  
}

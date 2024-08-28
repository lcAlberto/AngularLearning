import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user-interface';
import { Users } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input({ required: true }) usersList: IUser[] = []
  @Output('setSelectedUser') setSelectedUserEmit = new EventEmitter<IUser>();

  displayedColumns: string[] = ['name', 'created_at', 'active'];

  selectedUser(user: IUser) {
    this.setSelectedUserEmit.emit(user);
  }
}

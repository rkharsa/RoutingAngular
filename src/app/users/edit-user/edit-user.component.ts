import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: {id: number, name: string};
  userName:string = '';
  userId :number;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.usersService.getUser(1);
    this.userName = this.user.name;
    this.userId = this.user.id;
  }

  onUpdateUser() {
    this.usersService.updateUser(this.user.id, {name: this.userName});
  }

}

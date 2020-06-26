import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: {id: number, name: string}[] = [];
  constructor(private usersService:UsersService, private router: Router, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
  
  goToServerURL() {
    this.router.navigate(['/users'], {relativeTo: this.route});
  }
}

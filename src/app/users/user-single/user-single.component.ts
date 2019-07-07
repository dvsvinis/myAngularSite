import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  user;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //get the username from the url
    this.route.params.subscribe(params => {
      const username = params['username'];
    // use the userService to get the data from github api
    this.userService
      .getUser(username)
      .subscribe(user => this.user = user);
    });
  }

}



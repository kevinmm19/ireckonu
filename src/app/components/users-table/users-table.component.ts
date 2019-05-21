import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { ApiService } from '../../services/api.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['localid', 'name', 'email', 'address']; // TO DO: add rest of columns
  loading: boolean; // TO DO: move to profiles and communicate state with child
  users: User[] = [];
  // @Input() loadingStatus: boolean;
  // @Output() loadingChange = new EventEmitter<boolean>(); // TO DO: complete parent/child sync
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: ApiService) { 
    this.loading = true;
  }

  async ngOnInit() {
    try {
      this.api.getUsers()
        .subscribe(res => {
          this.users = res;
          this.dataSource = new MatTableDataSource<User>(this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loading = false;
          // this.loadingChange.emit(false);
        }, err => {
          this.loading = false;
          // this.loadingChange.emit(false);
        });
    } catch (error) {
      this.loading = false;
      // this.loadingChange.emit(false);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

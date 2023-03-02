import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.scss']
})
export class DefinitionsComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  go2Activities(){
    this.router.navigate(['activities']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  go2homepage() {
    this.router.navigate(['']);
  }

  go2pazienti() {
    this.router.navigate(['pazienti']);
  }

  go2definitions(){
    this.router.navigate(['definitions']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  navegarPessoas(): void {
    this.router.navigate(['/pessoas']);
  }

  novaPessoa(): void {
    this.router.navigate(['/pessoas/novo']);
  }
}
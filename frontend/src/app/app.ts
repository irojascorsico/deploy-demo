import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { Nav } from './shared/nav/nav';

@Component({
  selector: 'app-root',
  imports: [Footer,Header,Nav,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'demo-app';
}

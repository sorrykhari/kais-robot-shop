import { Component,  OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterLink, RouterLinkActive], 
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    // Initialization logic here
    console.log("Wazzam beeeeeeeeeeetch");
  }

}

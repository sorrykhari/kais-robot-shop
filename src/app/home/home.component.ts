import { Component,  OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterLink]
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    // Initialization logic here
    console.log("Wazzam beeeeeeeeeeetch");
  }

}

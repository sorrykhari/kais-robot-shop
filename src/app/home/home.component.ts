import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    // Initialization logic here
    console.log("Wazzam beeeeeeeeeeetch");
  }

}

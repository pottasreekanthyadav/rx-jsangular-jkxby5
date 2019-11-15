import { Component ,OnInit} from '@angular/core';
import {of,from} from "rxjs";
import { map,tap} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  ngOnInit(){
    of(2,4,6,8).pipe(
      map(i=>i*2)
    ).subscribe(console.log)
    
    of(2,4,6,8).pipe(
      tap(i=>console.log(i))
    )
  }
  name = 'Angular';
}

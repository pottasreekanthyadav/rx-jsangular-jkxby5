import { Component ,OnInit} from '@angular/core';
import {of,from} from "rxjs";
import { map,tap,take} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  ngOnInit(){
    // of(2,4,6,8).pipe(
    //   map(i=>i*2)
    // ).subscribe(console.log)
    
    // of(2,4,6,8).pipe(
     
    //   tap(i=>console.log(i)),
    //     map(i=>i*2),
    //      tap(i=>console.log(i)),
    //        map(i=>i-3),
    //         tap(i=>console.log(i))

    // ).subscribe()
    // of(2,4,6,9).pipe(
    //   take(2)
    // ).subscribe(console.log)
  }
  name = 'Angular';
}

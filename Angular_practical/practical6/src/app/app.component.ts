import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count =0

  handle(val:string){
    if(val=="inc"){
      this.count +=1;
    }
    
    else if(val=="dec"){
      if(this.count<=0){
        alert("Value can't in -ve")
      }
      else{
        this.count -=1
      }


    }
    else{
      this.count =0
    }
  }
}

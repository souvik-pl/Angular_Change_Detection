import { Component } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent {
  render() {
    console.log('Child 2 rendered');
  }

  clickHandler() {
    console.log('Clicked');
  }
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Y';
  search = "";
  students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];


  public updateFilter(event: any) {

    console.log(event.target.value
    );

    if (event.target.value == 0) {
      this.students = [
        { name: 'Quincy', grade: 96 },
        { name: 'Jason', grade: 84 },
        { name: 'Alexis', grade: 100 },
        { name: 'Sam', grade: 65 },
        { name: 'Katie', grade: 90 }
      ];
    }

    const val = event.target.value.toLowerCase(); // filter our data
    const temp = this.students.filter(function (studentTable) {
      return (studentTable.name.toLowerCase().indexOf(val) !== -1 || !val)
    });
    this.students = temp;

  }
}

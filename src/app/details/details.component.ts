import { Component,  EventEmitter,  Input, OnInit,Output } from '@angular/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

 @Input() data :any={}
  @Output() item=new EventEmitter();
  addbutton : boolean = false ;
  amount : number=0 ;
  showDescription: boolean = false;
  constructor()
  {

  }
  ngOnInit(): void {

  }
  add(){
    this.item.emit({item:this.data,quantity:this.amount})

  }
  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

}

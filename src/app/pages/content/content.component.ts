import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string ="https://tm.ibxk.com.br/2020/12/14/14182803597229.jpg?ims=1200x675";
  contentTitle:string ="MINHA NOTICA";
  contentDescription:string="sds sfsd";

  constructor(
    private route: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => 
      console.log(value.get("id"))
    )
  }

}

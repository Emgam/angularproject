import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-salesbycategory',
  templateUrl: './salesbycategory.component.html',
  styleUrls: ['./salesbycategory.component.css']
})
export class SalesbycategoryComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories: [
        'Trousers',
        'Dresses',
        'Tops',
        'Coats'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Trousers',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Dresses',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Tops',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'T-shirts',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Coats',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}

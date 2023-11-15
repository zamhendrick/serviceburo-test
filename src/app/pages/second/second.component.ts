import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { SecondService } from './services/second.service';
import {MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'type', 'links', 'content', 'display_type', 'display_image', 'authors', 'publishers'];
  sourceData!: MatTableDataSource<any>;
  sortedData = [];

  constructor(private secondService: SecondService) {
    
  }

  @ViewChild(MatSort,{static: true}) sort!: MatSort;

  // getProperty = (obj:any, path:any) => (
  //   path.split('.').reduce((o:any, p:any) => o && o[p], obj)
  // )

  ngOnInit() {
    this.fetchData();
  }

  ngAfterViewInit(): void {

    this.sort.sortChange.subscribe(console.log)
  }

  fetchData = () => {
    this.secondService.getExample().subscribe(res => {
      // this.sourceData = new MatTableDataSource(Object(res).data)
      // this.sourceData.sort = this.sort

      const resData = Object(res).data.map((item:any) => {
        return {
          id: item.id,
          type: item.type,
          links: item.links,
          content: item.attributes.content,
          display_type: item.attributes.display_properties.type,
          image: item.attributes.display_properties.image,
          relationships: item.relationships,
        }
      })
      this.sourceData = new MatTableDataSource(resData)
      this.sourceData.sort = this.sort
    })
  }

  filterData = (event:any) => {
    const filteredValue = (event.target as HTMLInputElement).value;
    this.sourceData.filter = filteredValue.trim().toLowerCase();
  }
}

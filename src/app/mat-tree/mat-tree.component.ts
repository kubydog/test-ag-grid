import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material';
import {NestedTreeControl} from '@angular/cdk/tree';

interface FoodNode {
  title: string;
  documents?: FoodNode[];
}

@Component({
  selector: 'app-mat-tree',
  templateUrl: './mat-tree.component.html',
  styleUrls: ['./mat-tree.component.css']
})
export class MatTreeComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.documents);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = [
      {title: 'Drink'},
      {
        title: 'Fruit',
        documents: [
          {title: 'Apple'},
          {title: 'Banana'},
          {title: 'Fruit loops'},
        ]
      }, {
        title: 'Vegetables',
        documents: [
          {
            title: 'Green'
          }, {
            title: 'Orange',
            documents: [
              {title: 'Pumpkins'},
              {title: 'Carrots'},
            ]
          },
        ]
      },
    ];
  }

  hasChild = (_: number, node: FoodNode) => !!node.documents && node.documents.length > 0;

}

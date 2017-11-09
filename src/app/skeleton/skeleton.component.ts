import { Component, OnInit } from '@angular/core';
import {Skeleton} from "../models/Skeleton";
import {SkeletonService} from "../services/skeleton.service";

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {

  private skeletonList: Skeleton[] = [];

  constructor(private skeletonService: SkeletonService) { }

  ngOnInit() {

    //Load all list on init
    this.loadLists();
  }

  public loadLists() {

    //Get all lists from server and update the lists property
    this.skeletonService.getAllSkeletons().subscribe(
      response => this.skeletonList = response,)

  }

  //The deleted list is being filtered out using the .filter method
  public deleteList(list: Skeleton) {
    this.skeletonService.deleteSkeleton(list._id).subscribe(
      response =>	this.skeletonList = this.skeletonList.filter(lists => lists !== list),)

  }

  //onAddList will be invoked when the child component emits an event
  public onAddList(newList) {
    this.skeletonList = this.skeletonList.concat(newList);
  }

}

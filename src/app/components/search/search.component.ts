import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'app';
  public isOpen: Boolean = false;
  public searchContent: any = {};
public isSearch: Boolean = false;
public artistname ;
myForm: FormGroup;

constructor(public searchService: SearchService) {

  }

  ngOnInit() {
    this.searchService.notify.subscribe((response) => {
      this.isSearch = response;
    });
  }


  public closeModal() {
  this.isOpen = false;
  }
  public open() {
  this.isOpen = true;
  this.myForm = new FormGroup({
    artist: new FormControl('', Validators.required),
    limit: new FormControl('', Validators.required)
  });
  }
  search(dataItem) {
    console.log(dataItem);
    this.searchService.getSearchData( dataItem.value).subscribe((res) => {

     this.searchContent = res;
    this.artistname = dataItem.value.artist;
      this.isOpen = false;
      this.isSearch = true;
    } );
  }

}

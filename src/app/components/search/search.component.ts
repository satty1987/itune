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
public isloading = false;
myForm: FormGroup;
errorMessage: String;
noResult = false;
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
    term: new FormControl('', Validators.required),
    limit: new FormControl('', Validators.required)
  });
  }
  search(dataItem) {
    this.isloading = true;
    this.searchService.getSearchData( dataItem.value).subscribe((res) => {

     this.searchContent = res;
     this.artistname = dataItem.value.term;
      this.isOpen = false;
      this.isSearch = true;
      this.isloading = false;
      this.noResult = false;
      if ( res.resultCount === 0 ) {
        this.noResult = true;
      }
    },
    error =>  this.errorMessage = <any>error);
  }

}

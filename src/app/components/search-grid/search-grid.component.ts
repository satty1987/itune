import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-search-grid',
  templateUrl: './search-grid.component.html',
  styleUrls: ['./search-grid.component.css']
})
export class SearchGridComponent implements OnInit {
  @Input() searchContent: any ;
  @Input() artistname;
  @Input() noResult: Boolean;
  noResultFound = 'Sorry No Result Found. Please Try Again';
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  constructor(public searchService: SearchService) {}

  ngOnInit() {
  }
  clear() {
  this.searchService.notify.next(false);
  }


  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }
}

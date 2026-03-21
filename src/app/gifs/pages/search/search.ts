import { Component, inject, signal } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { GifList } from "../../components/gif-list/gif-list";
import { GifsFacade } from '../../facade/gifs-facade';

@Component({
  selector: 'app-search',
  imports: [GifList],
  templateUrl: './search.html',
})
export default class Search {

  public lastSearch = signal<string>('');
  public gifsFacade = inject(GifsFacade);

  // private route = inject(ActivatedRoute);
  // private router = inject(Router);

  // constructor() {
  //   this.route.queryParams.subscribe((params) => {
  //     if (params['q']) {
  //       this.lastSearch.set(params['q']);
  //       this.gifsFacade.searchGifs(params['q']);
  //     } else {
  //       this.lastSearch.set('');
  //       this.gifsFacade.searchedGifs.set([]);
  //     }
  //   });
  // }

  onSearch(query: string) {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery || normalizedQuery === this.lastSearch()) return;
    this.lastSearch.set(normalizedQuery);
    this.gifsFacade.searchGifs(normalizedQuery);
  }
}

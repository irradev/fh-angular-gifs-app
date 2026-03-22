import { Component, inject, OnInit, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifsFacade } from '../../facade/gifs-facade';
import { ScrollStateService } from '@/app/shared/services/scroll-state';

@Component({
  selector: 'app-trending',
  imports: [GifList],
  templateUrl: './trending.html',
})
export default class Trending implements OnInit {

  public gifsFacade = inject(GifsFacade);
  public scrollStateService = inject(ScrollStateService);

  public scrollPosition = signal<number>(0);

  public onScrollEnd(): void {
    this.gifsFacade.page.update((page) => page + 1);
    this.gifsFacade.loadTrendingGifs();
  }

  public onScrollPosition(position: number): void {
    this.scrollStateService.setScrollPosition('trending', position);
  }

  ngOnInit(): void {
    const scrollPosition = this.scrollStateService.getScrollPosition('trending');
    if (scrollPosition) {
      this.scrollPosition.set(scrollPosition);
    }
  }



}

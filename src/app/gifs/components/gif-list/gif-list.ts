import { AfterViewInit, Component, computed, ElementRef, input, output, viewChild } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';
import { Gif } from '../../models/gif';

@Component({
  selector: 'gifs-gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
})
export class GifList implements AfterViewInit {

  public gifs = input.required<Gif[]>();
  public initScrollPosition = input<number>();
  public scrollEnd = output<void>();
  public scrollPosition = output<number>();

  public scrollContainer = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');

  public masonryGifs = computed<Gif[][]>(() => {
    const masonryGifs: Gif[][] = [];
    const gifs = this.gifs();
    const columns = 4;

    for (let i = 0; i < columns; i++) {
      masonryGifs.push([]);
    }

    gifs.forEach((gif, index) => {
      masonryGifs[index % columns].push(gif);
    });

    return masonryGifs;
  });

  public onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;
    const clientHeight = target.clientHeight;

    this.scrollPosition.emit(scrollTop);


    if (scrollHeight - scrollTop - clientHeight < 150) {
      this.scrollEnd.emit();
    }
  }

  ngAfterViewInit(): void {
    const initScrollPosition = this.initScrollPosition();

    if (initScrollPosition) {
      this.scrollContainer()?.nativeElement.scrollTo(0, initScrollPosition);
    }
  }

}

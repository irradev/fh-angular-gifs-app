import { Gif } from '@/app/gifs/models/gif';
import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  styles: `
    :host {
      display: block;
      height: auto;
      width: 100%;
      border-radius: 1rem;
    }
  `
})
export class GifListItem {

  public gif = input.required<Gif>();
}

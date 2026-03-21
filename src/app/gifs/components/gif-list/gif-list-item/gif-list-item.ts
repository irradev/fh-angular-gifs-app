import { Gif } from '@/app/gifs/models/gif';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'gifs-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItem {

  public gif = input.required<Gif>();
}

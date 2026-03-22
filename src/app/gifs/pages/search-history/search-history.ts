import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { GifsFacade } from '../../facade/gifs-facade';
import { GifList } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-search-history',
  imports: [GifList],
  templateUrl: './search-history.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchHistory {

  public gifsFacade = inject(GifsFacade);

  public query = toSignal(
    inject(ActivatedRoute).params
  );

  public history = computed(() => this.gifsFacade.getHistoryByQuery(this.query()?.['query'] || ''));

}

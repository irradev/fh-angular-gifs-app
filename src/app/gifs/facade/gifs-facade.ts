import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { GifsService } from "../services/gifs-service";
import { Gif } from "../models/gif";
import { StorageService } from "../services/storage-service";
import { SEARCHED_HISTORY_KEY } from "../constants/storage-keys";

@Injectable({
    providedIn: 'root'
})
export class GifsFacade {

    private readonly gifsService = inject(GifsService);
    private readonly storageService = inject(StorageService);

    // estado
    public trendingGifs = signal<Gif[]>([]);
    public searchedGifs = signal<Gif[]>([]);
    public searchedHistory = signal<Record<string, Gif[]>>({});
    public searchedHistoryKeys = computed(() => Object.keys(this.searchedHistory()));
    public isLoading = signal<boolean>(true);
    public error = signal<string | null>(null);

    constructor() {
        this.loadTrendingGifs();
        this.loadSearchedHistory();
    }

    private saveGifsToStorage = effect(() => {
        const history = this.searchedHistory();

        if (Object.keys(history).length === 0) return;

        this.storageService.set(SEARCHED_HISTORY_KEY, history);
    });

    private loadTrendingGifs() {
        this.gifsService.loadTrendingGifs().subscribe({
            next: (gifs) => {
                this.trendingGifs.set(gifs);
                this.isLoading.set(false);
            },
            error: (error) => {
                this.error.set(error.message);
                this.isLoading.set(false);
            }
        });
    }

    private loadSearchedHistory() {
        const history = this.storageService.get<Record<string, Gif[]>>(SEARCHED_HISTORY_KEY);
        if (history) {
            this.searchedHistory.set(history);
        }
    }

    searchGifs(query: string) {
        if (this.searchedHistory()[query]) {
            this.searchedGifs.set(this.searchedHistory()[query]);
            this.isLoading.set(false);
            return;
        }
        this.isLoading.set(true);
        this.error.set(null);
        this.gifsService.searchGifs(query).subscribe({
            next: (gifs) => {
                this.searchedGifs.set(gifs);
                this.isLoading.set(false);
                this.searchedHistory.update((history) => ({
                    ...history,
                    [query]: gifs
                }));
            },
            error: (error) => {
                this.error.set(error.message);
                this.isLoading.set(false);
            }
        });
    }

    getHistoryByQuery(query: string): Gif[] {
        return this.searchedHistory()[query] || [];
    }


}
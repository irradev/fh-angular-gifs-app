
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "@environments/environment";
import { GiphyResponse } from "../interfaces/giphy-response";
import { Gif } from "../models/gif";
import { GifMapper } from "../mappers/gif-mapper";
import { map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private http = inject(HttpClient);
    private readonly url = environment.giphyBaseUrl;
    private readonly apiKey = environment.giphyApiKey;

    // public trendingGifs = signal<Gif[]>([]);
    // public searchedGifs = signal<Gif[]>([]);
    // public isLoading = signal<boolean>(true);

    private defaultParams = {
        api_key: this.apiKey,
        limit: 20,
        offset: 0,
        rating: 'g',
        bundle: 'messaging_non_clips'
    };

    // constructor() {
    //     this.loadTrendingGifs();
    // }

    loadTrendingGifs(offset: number = 0) {
        const params = { ...this.defaultParams, offset };
        return this.http.get<GiphyResponse>(`${this.url}/gifs/trending`, {
            params
        }).pipe(
            map(res => GifMapper.mapGiphyResponseToGifArray(res)));
    }

    searchGifs(query: string) {
        const params = { ...this.defaultParams, q: query };

        return this.http.get<GiphyResponse>(`${this.url}/gifs/search`, { params }).pipe(
            map(res => GifMapper.mapGiphyResponseToGifArray(res))
        );
    }

    // loadTrendingGifs() {
    //     this.http.get<GiphyResponse>(`${this.url}/gifs/trending`, {
    //         params: this.defaultParams
    //     }).subscribe((response) => {
    //         this.trendingGifs.set(GifMapper.mapGiphyResponseToGifArray(response));
    //         this.isLoading.set(false);
    //     });

    // }

    // searchGifs(query: string) {
    //     const params = {
    //         ...this.defaultParams,
    //         q: query
    //     };
    //     return this.http.get<GiphyResponse>(`${this.url}/gifs/search`, {
    //         params
    //     }).pipe(
    //         map(response => GifMapper.mapGiphyResponseToGifArray(response))
    //     );
    // }

    // searchGifs(query: string) {
    //     const params = {
    //         ...this.defaultParams,
    //         q: query
    //     };
    //     this.isLoading.set(true);
    //     this.http.get<GiphyResponse>(`${this.url}/gifs/search`, {
    //         params
    //     }).subscribe((response) => {
    //         this.searchedGifs.set(GifMapper.mapGiphyResponseToGifArray(response));
    //         this.isLoading.set(false);
    //     });
    // }
}
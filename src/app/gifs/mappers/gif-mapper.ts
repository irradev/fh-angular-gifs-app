import { GiphyItem, GiphyResponse } from "../interfaces/giphy-response";
import { Gif } from "../models/gif";


export class GifMapper {
    static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        }
    }

    static mapGiphyResponseToGifArray(giphyResponse: GiphyResponse): Gif[] {
        return giphyResponse.data.map(giphyItem => this.mapGiphyItemToGif(giphyItem));
    }
}
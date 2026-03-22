import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ScrollStateService {

    private scrollState = signal<Map<string, number>>(new Map());

    public setScrollPosition(key: string, position: number) {
        this.scrollState.update((state) => {
            state.set(key, position);
            return state;
        });
    }

    public getScrollPosition(key: string): number | undefined {
        return this.scrollState().get(key);
    }

    public clearScrollPosition(key: string) {
        this.scrollState.update((state) => {
            state.delete(key);
            return state;
        });
    }

    public clearAllScrollPositions() {
        this.scrollState.set(new Map());
    }

}
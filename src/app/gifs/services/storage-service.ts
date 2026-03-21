import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private readonly localStorage = window.localStorage;

    get<T>(key: string): T | null {
        const value = this.localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    set<T>(key: string, value: T): void {
        this.localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key: string): void {
        this.localStorage.removeItem(key);
    }

    clear(): void {
        this.localStorage.clear();
    }

}
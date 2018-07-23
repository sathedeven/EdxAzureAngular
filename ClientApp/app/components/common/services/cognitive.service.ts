﻿import { Headers, Http } from '@angular/http';
import { AzureHttpClient } from './azureHttpClient';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BingSearchResponse } from '../models/bingSearchResponse';

@Injectable()
export class CognitiveService{
    bingSearchAPIKey = 'd753acf90e4b494889d436070900e3da';
    constructor(private http: AzureHttpClient) { }

    searchImages(searchTerm: string): Observable<BingSearchResponse> {
        return this.http.get('https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${searchTerm}', this.bingSearchAPIKey)
            .map(response => response.json() as BingSearchResponse)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
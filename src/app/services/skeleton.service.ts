import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Skeleton } from '../models/Skeleton';

import 'rxjs/add/operator/map';

@Injectable()
export class SkeletonService {

    constructor(private http: Http) { }

    private serverApi= 'http://localhost:3030';

    public getAllSkeletons(): Observable<Skeleton[]> {

        const URI = `${this.serverApi}/skeleton/`;
        return this.http.get(URI)
            .map(res => res.json())
            .map(res => <Skeleton[]>res.lists);
    }

    public deleteSkeleton(listId: string) {
      const URI = `${this.serverApi}/skeleton/${listId}`;
        const headers = new Headers;
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, {headers})
        .map(res => res.json());
    }

    public addSkeleton(skeleton: Skeleton) {
        const URI = `${this.serverApi}/skeleton/`;
        const headers = new Headers;
        const body = JSON.stringify({title: skeleton.title, description: skeleton.description});
        console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body ,{headers: headers})
        .map(res => res.json());
    }
}

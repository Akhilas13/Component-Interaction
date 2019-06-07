import { Injectable } from '@angular/core';
import { Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  sharedData: any = new Subject();
}

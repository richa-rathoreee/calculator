import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogglemodeService {
  mode: string = 'light';

  constructor() { }
}

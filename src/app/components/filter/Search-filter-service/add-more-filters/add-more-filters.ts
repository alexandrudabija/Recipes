import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor() {}

  transformToQuery(ParamsArray:any) {
    let params:any = {};

    for (let param of ParamsArray) {
      if (param.value.length > 0) {
        params[param.name] = param.value.join();
      }
    }
    return params;
  }
}

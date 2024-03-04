// Código de ejemplo para hacer una Pipe de filtrado

import { HttpParams } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe {
  transform(value: any, filterString: string, propName: string) {
    if (value.lenght === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}

// Código de ejemplo para hacer una Pipe de filtrado 

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filter',
    pure: false // Esto es para que el pipe se actualice cada vez que cambie algo en la página , Puede ser un problema de rendimiento 
})
export class FilterPipe {
    transform(value: any , filterString : string, propName: string ){
        if (value.lenght === 0 || filterString === '') {
            return value;
        }

        const resultArray = [];
        for( const item of value ){
            if (item[propName] === filterString) {
                resultArray.push(item)
            }
        }
        return resultArray
    }
}

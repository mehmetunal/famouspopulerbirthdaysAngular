import { Pipe, PipeTransform } from '@angular/core';
import { strictEqual } from 'assert';

@Pipe({
    name: 'firstImages'
})
export class FirstImagesPipe implements PipeTransform {


    transform(input: any, args?: any): any {
        try {
            if (input == null) return;
            return "https://avkbul.com/sosyal/upload/" + input.split(";")[0];
        } catch (error) {
            console.error('Here is the error message', error);
        }
    }

} 
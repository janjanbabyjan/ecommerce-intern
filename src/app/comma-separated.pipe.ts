import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparated'
})
export class CommaSeparatedPipe implements PipeTransform {
  transform(value: number): string {
    // Convert the number to string and insert commas
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
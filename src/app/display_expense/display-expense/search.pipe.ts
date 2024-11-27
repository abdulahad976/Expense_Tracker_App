import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    if (!value) return [];
    if (!searchTerm) return value;

    searchTerm = searchTerm.toLowerCase();

    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(searchTerm);
    });
  }

}

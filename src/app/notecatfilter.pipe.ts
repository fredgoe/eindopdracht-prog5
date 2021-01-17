import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notecatfilter'
})
export class NotecatfilterPipe implements PipeTransform {

  transform(items: any[], categoryFilter: string): any[] {
    if (!items) {
      return [];
    }
    if (!categoryFilter) {
      return items;
    }
    categoryFilter = categoryFilter.toLocaleLowerCase();

    return items.filter(it => {
      console.log(it);
      //return it.category.toLocaleLowerCase().includes(categoryFilter);
    });
  }
}

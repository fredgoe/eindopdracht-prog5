import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notefilter'
})
export class NotefilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      //console.log(it.content);
      return it.content.toLocaleLowerCase().includes(searchText);
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reviewstatus'
})
export class ReviewstatusPipe implements PipeTransform {

  transform(value: object): any {
    if (JSON.stringify(value) === '[]') {
      return 'Pending';
    } else { return 'Reviewed'; }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 60): string {
    if (!value) {
      return '';
    }

    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}
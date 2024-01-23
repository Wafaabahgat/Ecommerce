import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true,
})
export class TestPipe implements PipeTransform {
  transform(productName: string): string {
    return `test${productName}`;
  }
}

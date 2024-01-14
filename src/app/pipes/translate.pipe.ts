import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {
    return translations['pl'][value] || value;
  }
}

//to cos na dole osobno ok? assert
export const translations: { [lang: string]: { [key: string]: string } } = {
  pl: {
    kitchen: 'kuchnia',
    garden: 'ogród'
  },
  en: {
    kitchen: 'kuchnia',
    garden: 'ogród'
  },
}

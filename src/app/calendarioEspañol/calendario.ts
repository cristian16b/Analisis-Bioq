import { DateAdapter, MatDateFormats } from '@angular/material';
import { isMoment, Moment } from 'moment';
import * as moment from 'moment';

const MONTHS = {
    'long': [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
      'Octubre', 'Noviembre', 'Diciembre'
    ],
    'short': ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    'narrow': ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
  };
  const DAYS = {
    'long': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    'short': ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    'narrow': ['D', 'L', 'M', 'X', 'J', 'V', 'S']
  }

export const MOMENT_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'D/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM Y',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM Y'
  }
};

const dateNames: string[] = [];
for (let date = 1; date <= 31; date++) {
  dateNames.push(String(date));
}

export class MomentDateAdapter extends DateAdapter<Moment> {

  invalid(): Moment {
      throw new Error("Method not implemented.");
  }

  private localeData = moment.localeData();

  getYear(date: Moment): number {
    return date.year();
  }

  getMonth(date: Moment): number {
    return date.month();
  }

  getDate(date: Moment): number {
    return date.date();
  }

  getDayOfWeek(date: Moment): number {
    return date.day();
  }

  getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    return MONTHS[style];
  }

  getDateNames(): string[] {
    const dateNames = [];
    for (let i = 1; i <= 31; i++) {
      dateNames.push(i.toString());
    }

    return dateNames;
  }

  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    return DAYS[style];
  }

  getYearName(date: Moment): string {
    return String(date.year());
  }

  getFirstDayOfWeek(): number {
    return 1; // Monday
  }

  getNumDaysInMonth(date: Moment): number {
    return date.daysInMonth();
  }

  clone(date: Moment): Moment {
    return date.clone();
  }

  createDate(year: number, month: number, date: number): Moment {
    return moment([year, month, date]);
  }

  today(): Moment {
    return moment();
  }

  parse(value: any, parseFormat: any): Moment {
    let m = moment(value, parseFormat, true);
    if (!m.isValid()) {
      m = moment(value);
    }
    if (m.isValid()) {
      return m;
    }
    return null;
  }

  format(date: Moment, displayFormat: any): string {
    if (date) {
      return date.format(displayFormat);
    }
    return '';
  }

  addCalendarYears(date: Moment, years: number): Moment {
    return date.clone().add(years, 'y');
  }

  addCalendarMonths(date: Moment, months: number): Moment {
    return date.clone().add(months, 'M');
  }

  addCalendarDays(date: Moment, days: number): Moment {
    return date.clone().add(days, 'd');
  }

  setLocale(locale: any): void {
    this.localeData = moment.localeData(locale);
  }

  compareDate(first: Moment, second: Moment): number {
    return first.diff(second, 'seconds', true);
  }

  sameDate(first: any | Moment, second: any | Moment): boolean {
    if (first == null) {
      return second == null;
    } else if (isMoment(first)) {
      return first.isSame(second);
    }
    return super.sameDate(first, second);
  }

  clampDate(date: Moment, min?: any | Moment, max?: any | Moment): Moment {
    if (min && date.isBefore(min)) {
      return min;
    } else if (max && date.isAfter(max)) {
      return max;
    }
    return date;
  }

  isValid(date: Moment): boolean {
    return date.isValid();
  };

  isDateInstance(obj: Object): boolean {
    return moment.isMoment(obj);
  };

  toIso8601(date: Moment): string {
    return date.format();
  };

  fromIso8601(iso8601String: string): Moment {
    return moment(iso8601String);
  };

}
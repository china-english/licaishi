import moment from 'moment'

export default class calendarHelper {
  static getNumberOfWeeksInMonth (year: number, month: number): number {
    return moment([year, month, moment([year, month]).daysInMonth()]).week() - moment([year, month, 1]).week() + 1
  }

  static getWeekDataInMonth (year: number, month: number, firstDateInWeek: number): Object {
    // get current weekday
    const weekday = moment([year, month, firstDateInWeek]).day()
    const daysInMonth = moment([year, month]).daysInMonth()
    const length = daysInMonth - firstDateInWeek >= 7 ? 7 - weekday : daysInMonth - firstDateInWeek + 1
    return {weekday, length}
  }

  static getCurrentYear (): number {
    return moment().year()
  }

  static getCurrentMonth (): number {
    return moment().month()
  }

  static getCurrentDate (): number {
    return moment().date()
  }

  static getCurrentWeekFirstDate (): number {
    return moment().subtract(moment().day(), 'days').date()
  }

  static getDaysInMonth (year: number, month: number): number {
    return moment([year, month]).daysInMonth()
  }

  static getDateWithTimestamp (timestamp:string):string {
    return moment.unix(timestamp / 1000).format('YYYY-MM-DD')
  }
  static getDateTimeWithTimestamp (timestamp:string):string {
    return moment.unix(timestamp / 1000).format('YYYY-MM-DD HH:mm:ss')
  }
}

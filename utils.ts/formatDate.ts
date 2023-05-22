export function dateFormatted(data: string) {
  var parts = data.split('-')
  var year = parts[0]
  var month = parts[1]
  var day = parts[2]
  return day + '/' + month + '/' + year
}

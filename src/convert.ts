const sassSynRexp: Record<string, RegExp> = {
  variable: /^\$/,
}

export default function (data: Record<string, unknown>): string {
  return Object.keys(data).reduce((sass: string[], key: string) => {
    if (sassSynRexp.variable.test(key)) {
      sass.push(`${key}: ${data[key]}`)
    }

    return sass
  }, []).join('\n')
}

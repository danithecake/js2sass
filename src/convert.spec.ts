import convert from './convert'

describe('convert', () => {
  it('should return Sass variable', () => {
    expect(convert({ '$primary': 'blue' })).toEqual('$primary: blue')
  })
})

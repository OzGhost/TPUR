
const StringUtil = {

  eliminateSpace: input => {
    if (typeof(input) !== 'string')
      return ''
    return input.replace(' ', '_')
  }

}

export default StringUtil


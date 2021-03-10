module.exports = function check(str, bracketsConfig) {
  let activeBrackets = []
  let openBrackets = []
  let closeBrackets = new Map()
  for(const bracketConfig of bracketsConfig){
    const openBracket = bracketConfig[0]
    const closeBracket = bracketConfig[1]
    openBrackets.push(openBracket)
    closeBrackets[closeBracket] = openBracket
  }
  for(let bracket of str.split("")){
    if(openBrackets.includes(bracket)){
      if(closeBrackets[bracket] === bracket){
        if(activeBrackets.includes(bracket)){
          if(activeBrackets.pop() !== bracket){
            return false
            }
          continue
        }
      }
      activeBrackets.push(bracket)
    }
    else{
      const openBracket = closeBrackets[bracket]
      if(openBracket != activeBrackets.pop()){
        return false
      }
    }
  }
  return !activeBrackets.length
}

const codebeast = {
  [Symbol.iterator]: () => {
    const items = ['c','o','d','e','b','e','a','s','t']
    return {
      next: () => ({
        done: items.length === 0,
        value: items.shift()
      })
    }
  }
}

for ( const letter of codebeast ) {
  console.log( letter )
}

const  codebeast = () => ({
  [Symbol.asyncIterator]: () => {
    const items = ['c','o','d','e','b','e','a','s','t']
    return {
      next: () => Promise.resolve({
        done: items.length === 0,
        value: items.shift()
      })
    }
  }
})


for await ( var letter of codebeast() ) {
  console.log( letter )
}

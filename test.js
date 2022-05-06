const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]

  const sentenceJawn = (arr)//arr = people (line 1)
    return arr.map((value) => {
    let splitArray = value.name.split(' ') // split array will take people.name and split at the spaces (" ")

    //splitArray now = people[firstname, lastname]          [firstname is index 0, lastname is index 1]

    //splitArray[0] accesses first name then the following [0] accesses the first character of index 0
    //splitArray[1] accesses last name then the following [0] accesses the first character of index 1

    let capitalArr = splitArray[0][0].toUpperCase() + splitArray[0].substring(1) + " " + splitArray[1][0].toUpperCase() + splitArray[1].substring(1)
    //capitalArr takes the capitalized first and last name and returns them together.
    return `${capitalArr} is a ${value.occupation}`  
  })
  }


  console.log(sentenceJawn(people))
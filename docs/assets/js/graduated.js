function isInThePast(date) {
    const today = new Date();
  
    return date < today;
  }
  
  if (isInThePast(new Date('2023-06-09'))) {
      document.write("He graduated from DePaul Universtiy in 2023 with a major in Sound Design from The Theatre School and a minor in Network Technology from the college of Computing and Digital Media.")
  } 
  else {
      document.write("He will graduate from DePaul Universtiy in 2023 with a major in Sound Design from The Theatre School and a minor in Network Technology from the college of Computing and Digital Media.")
  }
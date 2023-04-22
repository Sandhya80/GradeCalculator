// Final grades of students based on the average of their 3 scores:

const finalGrade = (firstterm, midterm, final) =>  {
  const average = (firstterm + midterm + final) / 3;
  if ((firstterm < 0 || firstterm > 100) || (midterm < 0 || midterm > 100) || (final < 0 || final > 100))  {
    return 'You have entered an invalid grade';
  }  else if (average >= 0 && average <= 59)  {
    return 'F';
  }  else if (average >= 60 && average <= 69)  {
    return 'D';
  }  else if (average >= 70 && average <= 79)  {
    return 'C';
  }    else if (average >= 80 && average <= 89)  {
    return 'B';
  }    else  (average >= 90 && average <= 100)  
    return 'A';     
};

 console.log(finalGrade(99, 92, 95)) // Should print 'A'
 console.log(finalGrade(86, 79, 94)) // Should print 'B'
 console.log(finalGrade(102, 80, 101)) // Should print 'You have entered invalid grade'


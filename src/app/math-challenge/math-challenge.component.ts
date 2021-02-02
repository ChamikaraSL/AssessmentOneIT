import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-challenge',
  templateUrl: './math-challenge.component.html',
  styleUrls: ['./math-challenge.component.css']
})
export class MathChallengeComponent implements OnInit {

  numberInput = 0;
  numberOutput: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  numberToArray(number) {
    let array = number.toString().split("");
    return array.map(x => parseInt(x));
  }
  
  getNextLargest(num) {
    let digitArray: number[] = this.numberToArray(num);
    let digitArrayLength: number = digitArray.length;
    let i: number;
    for (i = digitArrayLength - 1; i > 0; i--) {
      if (digitArray[i] > digitArray[i - 1]) {
        break;
      }
    }

    if (i == 0) {
      this.numberOutput = ("no greater number is available")
    } else {
      let j: number = digitArray[i - 1]; //convert string value to number
      let minimumDigit = i;

      for (let x = i + 1; x < digitArrayLength; x++) {
        if (digitArray[x] > j && digitArray[x] < digitArray[minimumDigit]) {
          minimumDigit = x;
        }
      }

      let temp = digitArray[i - 1];
      digitArray[i - 1] = digitArray[minimumDigit];
      digitArray[minimumDigit] = temp;

      let firstArrSet = digitArray.slice(0, i);
      let secondArrSet = digitArray.slice(i, digitArrayLength);

      let sortedSecondArraySet = secondArrSet.sort();
      let letFinalNumberArray = firstArrSet.concat(sortedSecondArraySet);
      let letFinalNumber = letFinalNumberArray.join("");
      this.numberOutput = parseInt(letFinalNumber);
    }
  }
}


import { buffer } from 'stream/consumers';
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key + ' ';
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += key + ' ';
  }

  public pressActionKey(key: ActionKeys): void {
    this._buffer += key + ' ';
  }

  public display(): string {
    return this._buffer;
  }

  public evaluate(): void {

    /* In Progress - Order of operations evaluation
      let splitAddition = this._buffer.split('+');
      // 1 + 4 / 2 * 2
      // [1] [4 / 2 * 2]
      // [1] [[4 / 2] [2]]

      let splitSubtraction = splitAddition.map((item) => {
          return item.split('-');
        }
      );

      let splitMultiplication = splitSubtraction.map((item) => {
          return item.map((subItem) => {      
            return subItem.split('*');
          });
      });

      let splitDivision = splitMultiplication.map((item) => {
          return item.map((subItem) => {
            return subItem.map((subSubItem) => {
              return subSubItem.split('/');
            });
          });
      }
    );
    */

    
    let splitBuffer = this._buffer.split(' ');
    let first = parseInt(splitBuffer[0]);
    let operator = splitBuffer[1];
    let second = parseInt(splitBuffer[2]);

    /* In Progress 
    while (splitBuffer.length > 2) {
      let first = parseInt(splitBuffer[0]);
      let operator = splitBuffer[1];
      let second = parseInt(splitBuffer[2]);

      if (operator === '+') {
        splitBuffer[0] = (first + second).toString();
      } else if (operator === '-') {
        splitBuffer[0] = (first - second).toString();
      } else if (operator === '*') {
        splitBuffer[0] = (first * second).toString();
      } else if (operator === '/') {
        splitBuffer[0] = (first / second).toString();
      }

      splitBuffer.splice(1, 2);
    }

    */


    this._buffer += '=== ';

    if (operator === '+') {
      this._buffer += (first + second).toString();
    } else if (operator === '-') {
      this._buffer += (first - second).toString();
    } else if (operator === '*') {
      this._buffer += (first * second).toString();
    } else if (operator === '/') {
      this._buffer += (first / second).toString();
    }
  }

}

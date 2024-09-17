
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';

describe('CalculatorModel', (): void => {

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();

    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {

    // Assemble
    const calculator: ICalculatorModel = new CalculatorModel();
  
    // Act
    const displayValue: string = calculator.display();
  
    // Assert
    expect(displayValue).toEqual('');
  
  });

  it('should display `1` when the `1` key is pressed', (): void => {

    // Assemble
    const calculator: ICalculatorModel = new CalculatorModel();
  
    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();
  
    // Assert
    expect(displayValue).toEqual('1');
  
  });

  it('should display `2` when the `2` key is pressed', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();
  
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2');
  
  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('98');
  
  });

});

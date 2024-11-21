import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

type NumSliderWithInputProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
};

function NumSliderWithInput({ value, setValue, min, max }: NumSliderWithInputProps) {
  const numberToDollars = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  const dollarsToNumber = (value: string) => {
    return parseInt(value.replace(/[\$,]/g, ""), 10);
  };

  const [buyoutAmountDollars, setBuyoutAmountDollars] = useState<string>(numberToDollars(value));
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const checkForMinandMax = (value: number) => {
    if (value > max) return max;
    if (value < min) return min;
    return value;
  };

  const onBuyoutAmountChanged = (value: number) => {
    const val = checkForMinandMax(value);
    setValue(val);
  };

  const onBuyoutInputChanged = (value: string) => {
    if (isInputFocused) {
      let val = Number(dollarsToNumber(value));
      if (!isNaN(val)) {
        val = checkForMinandMax(val);
        setValue(val);
      }
      setBuyoutAmountDollars(value);
    } else {
      const val = checkForMinandMax(dollarsToNumber(value));
      setValue(val);
    }
  };

  const onInputUnfocused = () => {
    setIsInputFocused(false);
    setBuyoutAmountDollars(numberToDollars(value));
  };

  useEffect(() => {
    if (!isInputFocused) setBuyoutAmountDollars(numberToDollars(value));
  }, [value]);

  return (
        <div>
            <Input
              type="text"
              placeholder="Buyout Amount"
              value={buyoutAmountDollars}
              onChange={(e) => onBuyoutInputChanged(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => onInputUnfocused()}
            />
            <div className="flex flex-row">
              <div>{numberToDollars(min)}</div>
              <Slider
                value={[value]}
                onValueChange={(value: number[]) => onBuyoutAmountChanged(value[0])}
                max={max}
                min={min}
              />
              <div>{numberToDollars(max)}</div>
          </div>
        </div>
  );
}

export default NumSliderWithInput;

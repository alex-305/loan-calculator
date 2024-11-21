import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import Icon from "@mdi/react";
import { mdiMinus, mdiPlus } from "@mdi/js";

type NumSliderWithInputProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
  withSlider?: boolean;
  prefix?: string;
  suffix?: string;
  commas?: boolean;
  increment?: number;
  decrement?: number;
};

function NumInput({ 
    value, 
    setValue, 
    min, 
    max, 
    withSlider=false, 
    prefix="", 
    suffix="", 
    commas = false,
    increment = 0,
    decrement = 0 }
    : NumSliderWithInputProps) {

  const numberToStr = (value: number) => {
    let str = commas ? value.toLocaleString() : value;
    return `${prefix}${str}${suffix}`;
  };

  const strToNumber = (value: string) => {
    const noPrefixOrSuffix = value.replace(new RegExp(`^${prefix}`), '').replace(new RegExp(`${suffix}$`), '');
    return parseInt(noPrefixOrSuffix.replace(/[\$,]/g, ""), 10);
  };

  const [numStr, setnumStr] = useState<string>(numberToStr(value));
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const checkForMinandMax = (value: number) => {
    if (value > max) return max;
    if (value < min) return min;
    return value;
  };

  const onNumChanged = (value: number) => {
    const val = checkForMinandMax(value);
    setValue(val);
  };

  const onNumInputChanged = (value: string) => {
    if (isInputFocused) {
      let val = Number(strToNumber(value));
      if (!isNaN(val)) {
        val = checkForMinandMax(val);
        setValue(val);
      }
      setnumStr(value);
    } else {
      const val = checkForMinandMax(strToNumber(value));
      setValue(val);
    }
  };
  const onIncrement = () => {
    let val = value + increment;
    val = checkForMinandMax(val);
    setValue(val);
  };
  
  const onDecrement = () => {
    let val = value - decrement;
    val = checkForMinandMax(val);
    setValue(val);
  };

  const onInputUnfocused = () => {
    setIsInputFocused(false);
    setnumStr(numberToStr(value));
  };

  const onInputFocused = () => {
    setIsInputFocused(true)
    setnumStr(String(strToNumber(numStr)))
  }

  useEffect(() => {
    if (!isInputFocused) setnumStr(numberToStr(value));
  }, [value]);

  return (
        <div>
          <div className="flex flex-row">
            <Input
              type="text"
              placeholder="Buyout Amount"
              value={numStr}
              onChange={(e) => onNumInputChanged(e.target.value)}
              onFocus={() => onInputFocused()}
              onBlur={() => onInputUnfocused()}
            />
            { decrement !== 0 &&
            <Button className="p-2" onClick={() => onDecrement()}><Icon path={mdiMinus}/></Button>}
            { increment !== 0 &&
            <Button className="p-2 mx-1" onClick={() => onIncrement()}><Icon path={mdiPlus}/></Button>}
          </div>
          { withSlider &&
          <div className="flex flex-row">
          
            <div>{numberToStr(min)}</div>
            <Slider
              value={[value]}
              onValueChange={(value: number[]) => onNumChanged(value[0])}
              max={max}
              min={min}
            />
            <div>{numberToStr(max)}</div>
        </div>
          }
        </div>
  );
}

export default NumInput;

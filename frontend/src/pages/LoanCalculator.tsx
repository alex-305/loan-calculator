import NumInput from "@/components/LoanCalculator/NumInput";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

function LoanCalculator() {
  const [buyoutAmount, setBuyoutAmount] = useState<number>(50000);
  const [downPayment, setDownPayment] = useState<number>(15);
  const [termLength, setTermLength] = useState<number>(7);

  return (
    <div className="bg-white text-black p-5">
      <div className="text-center">
        <div className="text-2xl">SBA Loan Calculator</div>
        <div className="text-sm text-gray-500">Estimate your monthly SBA payments</div>
      </div>
      <Separator className="my-3" />
      <div className="flex flex-row p-6">
        <div className="w-1/4 space-y-10">
          <div>
            <div>Buyout Amount</div>
                <NumInput 
                value={buyoutAmount} 
                setValue={setBuyoutAmount} 
                min={50000} 
                max={5000000}
                withSlider
                prefix="$"
                commas
                />
            </div>
            <div>
                <div>Down Payment (minimum 15%)</div>
                    <NumInput
                    value={downPayment}
                    setValue={setDownPayment}
                    min={15}
                    max={100}
                    suffix="%"
                    increment={1}
                    decrement={1}
                    />
            </div>
            <div>
                <div>Term Length</div>
                <NumInput
                    value={termLength}
                    setValue={setTermLength}
                    min={7}
                    max={25}
                    suffix=" years"
                    increment={1}
                    decrement={1}
                />
            </div>
        </div>
        <Separator orientation="vertical" className="h-full mx-3" />

        <div className="">TEST</div>
      </div>
    </div>
  );
}

export default LoanCalculator;

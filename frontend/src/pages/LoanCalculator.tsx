import NumSliderWithInput from "@/components/LoanCalculator/NumSliderWithInput";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

function LoanCalculator() {
  const [buyoutAmount, setBuyoutAmount] = useState<number>(50000);
  
  return (
    <div className="bg-white text-black p-5">
      <div className="text-center">
        <div className="text-2xl">SBA Loan Calculator</div>
        <div className="text-sm text-gray-500">Estimate your monthly SBA payments</div>
      </div>
      <Separator className="my-3" />
      <div className="flex flex-row p-6">
        <div className="w-1/2">
          <div className="w-1/2">
            <div>Buyout Amount</div>
                <NumSliderWithInput 
                value={buyoutAmount} 
                setValue={setBuyoutAmount} 
                min={50000} 
                max={5000000}/>
            </div>
        </div>
        <Separator orientation="vertical" className="h-full mx-3" />

        <div className="">TEST</div>
      </div>
    </div>
  );
}

export default LoanCalculator;

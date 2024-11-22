import NumInput from "@/components/LoanCalculator/NumInput";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { numberToDollars } from "@/scripts/dollarString";
import AmortizationYear from "@/types/AmortizationYear";
import { useEffect, useState } from "react";

function LoanCalculator() {
  const calculatePrinciple = (amount: number, down: number): number => {
    return amount * ((100 - down) / 100);
  };
  const calculateDownPayment = (amount: number, down: number): number => {
    return amount * (down / 100);
  };

  const calculateMonthlyPayment = (principle: number, interest: number, length: number): number => {
    const monthlyInterestRate = interest / 12 / 100;
    const months = length * 12;

    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
    const denominator = Math.pow(1 + monthlyInterestRate, months) - 1;

    const monthlyPayment = principle * (numerator / denominator);
    return monthlyPayment;
  };

  const calculateTotal = (principle: number, interest: number, length: number): number => {
    const monthly = calculateMonthlyPayment(principle, interest, length);
    return monthly * (length * 12);
  };

  const calculateYears = (
    principle: number,
    interestRate: number,
    years: number,
    monthlyPayment: number
  ): AmortizationYear[] => {
    const currentYear = new Date().getFullYear() + 1;
    const arr = [];

    let balance = principle;

    for (let i = 0; i < years + 1; i++) {
      const beginningBalance = balance;
      const amountPaid = monthlyPayment * 12;
      const interest = beginningBalance * (interestRate / 100);

      let principle = amountPaid - interest;

      if (principle > balance) principle = balance;

      balance -= principle;

      const a: AmortizationYear = {
        year: currentYear + i,
        beginningBalance: beginningBalance,
        interest: interest,
        principle: principle,
        endingBalance: balance,
      };
      arr.push(a);
    }

    return arr;
  };

  const [annualInterest, setAnnualInterest] = useState<number>(6.75);
  const [buyoutAmount, setBuyoutAmount] = useState<number>(50000);
  const [downPayment, setDownPayment] = useState<number>(15);
  const [termLength, setTermLength] = useState<number>(7);
  const [estimatedMonthlyPayment, setEstimatedMonthlyPayment] = useState<number>(
    calculateMonthlyPayment(calculatePrinciple(buyoutAmount, downPayment), annualInterest, termLength)
  );
  const [estimatedDownPayment, setEstimatedDownPayment] = useState<number>(
    calculateDownPayment(buyoutAmount, downPayment)
  );
  const [totalPayment, setTotalPayment] = useState<number>(
    calculateTotal(calculatePrinciple(buyoutAmount, downPayment), annualInterest, termLength)
  );
  const [years, setYears] = useState<AmortizationYear[]>([]);

  useEffect(() => {
    const principle = calculatePrinciple(buyoutAmount, downPayment);
    setEstimatedMonthlyPayment(calculateMonthlyPayment(principle, annualInterest, termLength));
    setEstimatedDownPayment(calculateDownPayment(buyoutAmount, downPayment));
    setTotalPayment(calculateTotal(principle, annualInterest, termLength));
    setYears(calculateYears(principle, annualInterest, termLength, estimatedMonthlyPayment));
  }, [buyoutAmount, downPayment, termLength, annualInterest, estimatedMonthlyPayment, calculateTotal]);

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
          <div>
            <div>Annual Interest Rate</div>
            <NumInput
              value={annualInterest}
              setValue={setAnnualInterest}
              min={0}
              max={25}
              suffix="%"
              increment={0.05}
              decrement={0.05}
            />
          </div>
        </div>
        <div className="min-h-full px-5">
          <Separator orientation="vertical" />
        </div>
        <div className="flex flex-col">
          <div className="text-2xl">Your estimated monthly payment</div>
          <div className="text-4xl font-bold">{numberToDollars(estimatedMonthlyPayment)}</div>
          <div className="text-2xl">Your estimated down payment</div>
          <div className="text-2xl font-bold">{numberToDollars(estimatedDownPayment)}</div>
          <div className="text-2xl">Your estimated total payment</div>
          <div className="text-2xl font-bold">{numberToDollars(totalPayment)}</div>
        </div>
        <div className="min-h-full px-5">
          <Separator orientation="vertical" />
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Beginning Balance</TableHead>
                <TableHead>Interest</TableHead>
                <TableHead>Principle</TableHead>
                <TableHead>Ending Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {years &&
                years.map((y) => (
                  <TableRow key={y.year}>
                    <TableCell>{y.year}</TableCell>
                    <TableCell>{numberToDollars(y.beginningBalance)}</TableCell>
                    <TableCell>{numberToDollars(y.interest)}</TableCell>
                    <TableCell>{numberToDollars(y.principle)}</TableCell>
                    <TableCell>{numberToDollars(y.endingBalance)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default LoanCalculator;

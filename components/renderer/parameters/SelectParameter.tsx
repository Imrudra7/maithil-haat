'use client';

import { ParameterResponse } from '@/types/schema';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  parameter: ParameterResponse;
  value?: any;
  onExecuteChange?: (paramKey: string, value: any, methods: any) => void;
}

export default function SelectParameter({ parameter, value, onExecuteChange }: Props) {
  const uiProps = parameter.props || {};
  const methods = uiProps.methods || {};
  const options = uiProps.options || []; // 🔥 Expecting array of {label, value}

  const handleValueChange = (newValue: string) => {
    onExecuteChange?.(parameter.paramKey, newValue, methods);
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor={parameter.paramKey}>{uiProps.label || parameter.displayName}</Label>
      <Select onValueChange={handleValueChange} value={value || ""}>
        <SelectTrigger id={parameter.paramKey} className="w-full">
          <SelectValue placeholder={uiProps.placeholder || "Select option"} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option: any) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
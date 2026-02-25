'use client';

import { ParameterResponse } from '@/types/schema';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Props {
  parameter: ParameterResponse;
  value?: any; 
  onExecuteChange?: (paramKey: string, value: any, methods: any) => void;
}

export default function CheckboxParameter({ parameter, value, onExecuteChange }: Props) {
  const uiProps = parameter.props || {};
  const methods = uiProps.methods || {};

  const handleCheckedChange = (checked: boolean) => {
    // Checkbox mein value boolean (true/false) hoti hai
    onExecuteChange?.(parameter.paramKey, checked, methods);
  };

  return (
    <div className="flex items-center space-x-2 py-2">
      <Checkbox 
        id={parameter.paramKey} 
        checked={!!value} // 🔥 Boolean check
        onCheckedChange={handleCheckedChange}
        disabled={uiProps.disabled}
      />
      <Label 
        htmlFor={parameter.paramKey}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        {uiProps.label || parameter.displayName}
      </Label>
    </div>
  );
}
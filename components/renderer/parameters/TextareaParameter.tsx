'use client';

import { ParameterResponse } from '@/types/schema';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  parameter: ParameterResponse;
  value?: any;
  onExecuteChange?: (paramKey: string, value: any, methods: any) => void;
}

export default function TextareaParameter({ parameter, value, onExecuteChange }: Props) {
  const uiProps = parameter.props || {};
  const methods = uiProps.methods || {};

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onExecuteChange?.(parameter.paramKey, e.target.value, methods);
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor={parameter.paramKey}>{uiProps.label || parameter.displayName}</Label>
      <Textarea
        id={parameter.paramKey}
        value={value || ''}
        onChange={handleChange}
        placeholder={uiProps.placeholder}
        className="min-h-[100px]"
        required={parameter.validationRules?.required || uiProps.required || false}
      />
    </div>
  );
}
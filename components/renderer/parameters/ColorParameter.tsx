'use client';

import { ParameterResponse } from '@/types/schema';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ColorParameter({ parameter, value, onExecuteChange }: any) {
  const uiProps = parameter.props || {};
  const methods = uiProps.methods || {};

  return (
    <div className="flex items-center justify-between p-2 border rounded-md">
      <Label htmlFor={parameter.paramKey} className="text-sm font-medium">
        {uiProps.label || parameter.displayName}
      </Label>
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono text-muted-foreground">{value || '#000000'}</span>
        <input
          type="color"
          id={parameter.paramKey}
          aria-label='Input is rendering for color'
          value={value || '#000000'}
          onChange={(e) => onExecuteChange?.(parameter.paramKey, e.target.value, methods)}
          className="w-8 h-8 cursor-pointer rounded-md border-none"
        />
      </div>
    </div>
  );
}
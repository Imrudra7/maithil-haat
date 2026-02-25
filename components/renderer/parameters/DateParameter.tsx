'use client';

import { ParameterResponse } from '@/types/schema';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DateParameter({ parameter, value, onExecuteChange }: any) {
    const uiProps = parameter.props || {};
    const methods = uiProps.methods || {};

    return (
        <div className="grid gap-2">
            <Label htmlFor={parameter.paramKey}>{uiProps.label || parameter.displayName}</Label>
            <Input
                id={parameter.paramKey}
                type="date"
                value={value || ''}
                onChange={(e) => onExecuteChange?.(parameter.paramKey, e.target.value, methods)}
            />
        </div>
    );
}
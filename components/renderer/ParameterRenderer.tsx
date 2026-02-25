'use client';

import { ParameterResponse } from '@/types/schema';
import TextParameter from './parameters/TextParameter';
import InputParameter from './parameters/InputParameter';
import ButtonParameter from './parameters/ButtonParameter';
import CheckboxParameter from './parameters/CheckboxParameter';
import SelectParameter from './parameters/SelectParameter';
import TextareaParameter from './parameters/TextareaParameter';
import ColorParameter from './parameters/ColorParameter';
import ImageParameter from './parameters/ImageParameter';

interface ParameterRendererProps {
  parameter: ParameterResponse;
  isCardHeader?: boolean;
  slug: string;
  value?: any;
  onInputChange?: (paramKey: string, value: any, methodsConfig: any) => void;
  onBtnClick?: (paramKey: string, eventCode: string, methodsConfig: any) => void;
}

// 🔥 FIX: Destructuring mein 'value', 'onInputChange', aur 'onBtnClick' ko add kiya
export default function ParameterRenderer({
  parameter,
  isCardHeader,
  value,
  onInputChange,
  onBtnClick,
}: ParameterRendererProps) {
  const safeParamType = String(parameter.paramType || '').trim().toUpperCase();

  switch (safeParamType) {
    case 'TEXT':
      return <TextParameter parameter={parameter} isCardHeader={isCardHeader} />;

    case 'INPUT_TEXT':
    case 'INPUT_EMAIL':
    case 'INPUT_PASSWORD':
      return (
        <InputParameter
          parameter={parameter}
          value={value}
          onExecuteChange={onInputChange}
        />
      );

    case 'BUTTON':
      return (
        <ButtonParameter
          parameter={parameter}
          onExecuteClick={onBtnClick}
        />
      );
    // 🔥 CHECKBOX Fix
    case 'CHECKBOX':
      return (
        <CheckboxParameter
          parameter={parameter}
          value={value}
          onExecuteChange={onInputChange}
        />
      );

    // 🔥 SELECT (Dropdown)
    case 'SELECT':
      return (
        <SelectParameter
          parameter={parameter}
          value={value}
          onExecuteChange={onInputChange}
        />
      );

    // 🔥 TEXTAREA (Long text)
    case 'TEXTAREA':
      return (
        <TextareaParameter
          parameter={parameter}
          value={value}
          onExecuteChange={onInputChange}
        />
      );
    // 🔥 IMAGE Case (Jo tumne manga tha)
    case 'IMAGE':
      return (
        <ImageParameter
          parameter={parameter}
          value={value}          
        />
      );

    // 🔥 COLOR Case (Banner ya Button color change karne ke liye)
    case 'COLOR':
      return (
        <ColorParameter
          parameter={parameter}
          value={value}
          onExecuteChange={onInputChange}
        />
      );

    // 🔥 DATE (Orders ya Events ke liye useful hai)
    case 'DATE':
      return (
        <InputParameter
          parameter={parameter}
          value={value}
          onExecuteChange={onInputChange}
        // InputParameter mein type="date" handle ho jayega
        />
      );
    default:
      console.warn(`[ParameterRenderer] Unknown type: ${safeParamType}`);
      return null;
  }
}
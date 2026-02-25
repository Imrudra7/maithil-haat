'use client';

import { ParameterResponse } from '@/types/schema';

interface Props {
    parameter: ParameterResponse;
    // value mein tumhara { src, alt, objectFit } object hoga
    value?: any; 
}

export default function ImageParameter({ parameter, value }: Props) {
    // 🔥 Sabkuch props aur value se automatic utha rhe hain
    const uiProps = parameter.props || {};
    
    console.log(uiProps);
    // Agar value object hai toh wahan se, warna uiProps se fallback
    const src = value?.src || uiProps.src || '';
    const alt = value?.alt || uiProps.alt || parameter.displayName || '';
    const objectFit = value?.objectFit || uiProps.objectFit || 'cover';

    // Agar src hi nahi hai, toh kuch render mat karo
    if (!src) return null;

    return (
        <img 
            src={src} 
            alt={alt} 
            style={{ 
                objectFit: objectFit as any,
                width: '100%',
                height: '100%',
                display: 'block'
            }} 
        />
    );
}
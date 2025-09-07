"use client";

import React, { useCallback, useEffect, useRef } from 'react';
import { TextFieldClientComponent } from 'payload';
import { HexColorPicker } from "react-colorful";
import { useField } from '@payloadcms/ui';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MdColorize } from 'react-icons/md';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

const ColorPicker:TextFieldClientComponent = ({field, path}) => {
  const { value, setValue } = useField<string>({path: path});
  const lastRef = useRef(value);

  // keep in sync when external value changes
  useEffect(() => {
    lastRef.current = value;
  }, [value]);

  const handleChange = useCallback((newColor:string) => {
    const n = (newColor || '').toLowerCase();
    if (n === (lastRef.current || '').toLowerCase()) return; // 如果相同就不更新
    lastRef.current = n;
    setValue(n);
  }, [setValue]);
  
  return (
    <div className="field-type text">
      <label className="field-label">
        {field.label + ""}
      </label>
      <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
        <Input
          type="text"
          value={value || ''}
          onChange={(e) => handleChange(e.target.value)}
          className="field-type__wrap"
          placeholder="Hexadecimal color code"
          style={{height: "40px", width: "100%", flexGrow: 1}}
        />
        <Popover>
          <PopoverTrigger className={cn(            
            "btn btn--icon-style-with-border btn--style-primary" 
          )} style={{margin: 0, padding: 0, width: "40px", height: "40px"}}>
              <MdColorize size={16} />
          </PopoverTrigger>
          <PopoverContent>
            <HexColorPicker
              color={value || '#ffffff'}
              onChange={(newColor) => {
                setValue(newColor);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ColorPicker;
"use client";

import { Input as AntInput } from "antd";
import type { InputProps as AntInputProps } from "antd";
import type { CSSProperties } from "react";

export interface InputProps extends Omit<AntInputProps, "size"> {
  label?: string;
  error?: string;
  id?: string;
  style?: CSSProperties;
}

export function Input({ label, error, id, className, style, ...props }: InputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: 14, fontWeight: 500, color: "#374151" }}>
          {label}
        </label>
      )}
      <AntInput
        id={id}
        status={error ? "error" : undefined}
        className={className}
        style={style}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} style={{ fontSize: 12, color: "#EF4444", margin: 0 }}>
          {error}
        </p>
      )}
    </div>
  );
}

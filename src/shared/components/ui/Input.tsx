"use client";

import { forwardRef, memo, useId } from "react";
import { Input as AntInput } from "antd";
import type { GetProps } from "antd";

// ─── FieldProps (shared by all variants) ─────────────────────────────────────

export interface FieldProps {
  label?: string;
  /** Subtle helper text shown below the input when there is no error. */
  hint?: string;
  /** Error message — triggers red border + aria-invalid. */
  error?: string;
  required?: boolean;
}

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
}: FieldProps & { id: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="select-none text-sm font-medium leading-none text-gray-700"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-red-500" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
      )}

      {children}

      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-xs text-gray-400">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

// ─── useField — stable id + ARIA props ───────────────────────────────────────

function useField(
  idProp: string | undefined,
  { error, hint, required }: Pick<FieldProps, "error" | "hint" | "required">
) {
  const autoId = useId();
  const id = idProp ?? autoId;
  return {
    id,
    ariaProps: {
      "aria-invalid": error ? (true as const) : undefined,
      "aria-describedby":
        error ? `${id}-error` : hint ? `${id}-hint` : undefined,
      "aria-required": required || undefined,
    },
  };
}

// ─── Variant prop types ───────────────────────────────────────────────────────

export type InputProps = GetProps<typeof AntInput> & FieldProps;
export type PasswordProps = GetProps<typeof AntInput.Password> & FieldProps;
export type TextAreaProps = GetProps<typeof AntInput.TextArea> & FieldProps;
export type SearchProps = GetProps<typeof AntInput.Search> &
  Pick<FieldProps, "label" | "hint" | "error">;

// ─── Input ────────────────────────────────────────────────────────────────────

const InputInner = forwardRef<React.ElementRef<typeof AntInput>, InputProps>(
  ({ label, hint, error, required, id: idProp, ...rest }, ref) => {
    const { id, ariaProps } = useField(idProp, { error, hint, required });
    return (
      <Field id={id} label={label} hint={hint} error={error} required={required}>
        <AntInput
          ref={ref}
          id={id}
          status={error ? "error" : undefined}
          {...ariaProps}
          {...rest}
        />
      </Field>
    );
  }
);
InputInner.displayName = "Input";

// ─── Password ─────────────────────────────────────────────────────────────────

const PasswordInner = forwardRef<
  React.ElementRef<typeof AntInput.Password>,
  PasswordProps
>(({ label, hint, error, required, id: idProp, ...rest }, ref) => {
  const { id, ariaProps } = useField(idProp, { error, hint, required });
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required}>
      <AntInput.Password
        ref={ref}
        id={id}
        status={error ? "error" : undefined}
        {...ariaProps}
        {...rest}
      />
    </Field>
  );
});
PasswordInner.displayName = "Input.Password";

// ─── TextArea ─────────────────────────────────────────────────────────────────

const TextAreaInner = forwardRef<
  React.ElementRef<typeof AntInput.TextArea>,
  TextAreaProps
>(({ label, hint, error, required, id: idProp, ...rest }, ref) => {
  const { id, ariaProps } = useField(idProp, { error, hint, required });
  return (
    <Field id={id} label={label} hint={hint} error={error} required={required}>
      <AntInput.TextArea
        ref={ref}
        id={id}
        status={error ? "error" : undefined}
        {...ariaProps}
        {...rest}
      />
    </Field>
  );
});
TextAreaInner.displayName = "Input.TextArea";

// ─── Search ───────────────────────────────────────────────────────────────────

const SearchInner = forwardRef<
  React.ElementRef<typeof AntInput.Search>,
  SearchProps
>(({ label, hint, error, id: idProp, className, style, ...rest }, ref) => {
  const { id, ariaProps } = useField(idProp, { error, hint });
  const hasWrapper = label || hint || error;
  if (!hasWrapper) {
    return (
      <AntInput.Search
        ref={ref}
        id={id}
        status={error ? "error" : undefined}
        className={className}
        style={{ width: "100%", ...style }}
        {...ariaProps}
        {...rest}
      />
    );
  }
  return (
    <Field id={id} label={label} hint={hint} error={error}>
      <AntInput.Search
        ref={ref}
        id={id}
        status={error ? "error" : undefined}
        className={className}
        style={{ width: "100%", ...style }}
        {...ariaProps}
        {...rest}
      />
    </Field>
  );
});
SearchInner.displayName = "Input.Search";

// ─── Compound export ──────────────────────────────────────────────────────────

export const Input = Object.assign(memo(InputInner), {
  Password: memo(PasswordInner),
  TextArea: memo(TextAreaInner),
  Search: memo(SearchInner),
});

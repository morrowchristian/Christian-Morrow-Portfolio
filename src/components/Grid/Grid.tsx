// src/components/layout/Grid.tsx
import React, { forwardRef } from "react";
import "./Grid.css";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: string;
  gap?: string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, columns = "repeat(auto-fill, minmax(280px, 1fr))", gap = "32px", style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="grid"
        style={{ gridTemplateColumns: columns, gap, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

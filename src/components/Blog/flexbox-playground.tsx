"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

// ============================================
// Interactive Flexbox Container Playground
// ============================================

interface FlexboxPlaygroundProps {
  title?: string;
  description?: string;
}

export function FlexboxPlayground({
  title = "Flexbox Playground",
  description = "Experiment with flexbox properties in real-time!",
}: FlexboxPlaygroundProps) {
  const [flexDirection, setFlexDirection] = useState<
    "row" | "row-reverse" | "column" | "column-reverse"
  >("row");
  const [justifyContent, setJustifyContent] = useState<
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
  >("flex-start");
  const [alignItems, setAlignItems] = useState<
    "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
  >("stretch");
  const [flexWrap, setFlexWrap] = useState<"nowrap" | "wrap" | "wrap-reverse">(
    "nowrap",
  );
  const [gap, setGap] = useState(8);
  const [itemCount, setItemCount] = useState(5);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap: `${gap}px`,
    minHeight: "200px",
    padding: "12px",
    backgroundColor: "hsl(var(--muted))",
    borderRadius: "12px",
    border: "2px dashed hsl(var(--border))",
    transition: "all 0.3s ease-out",
    overflow: "auto",
  };

  const itemColors = [
    "bg-blue-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-violet-500",
    "bg-cyan-500",
    "bg-orange-500",
    "bg-pink-500",
  ];

  return (
    <div className="not-prose bg-card my-8 w-full rounded-xl border p-4 shadow-sm sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg font-bold text-balance sm:text-xl">{title}</h3>
        <p className="text-muted-foreground mt-1 text-xs text-pretty sm:text-sm">
          {description}
        </p>
      </div>

      {/* Controls */}
      <div className="mb-4 grid grid-cols-2 gap-3 sm:mb-6 sm:gap-4 lg:grid-cols-3">
        <ControlGroup label="flex-direction">
          <SelectControl
            value={flexDirection}
            onChange={(v) => setFlexDirection(v as typeof flexDirection)}
            options={["row", "row-reverse", "column", "column-reverse"]}
          />
        </ControlGroup>

        <ControlGroup label="justify-content">
          <SelectControl
            value={justifyContent}
            onChange={(v) => setJustifyContent(v as typeof justifyContent)}
            options={[
              "flex-start",
              "flex-end",
              "center",
              "space-between",
              "space-around",
              "space-evenly",
            ]}
          />
        </ControlGroup>

        <ControlGroup label="align-items">
          <SelectControl
            value={alignItems}
            onChange={(v) => setAlignItems(v as typeof alignItems)}
            options={[
              "stretch",
              "flex-start",
              "flex-end",
              "center",
              "baseline",
            ]}
          />
        </ControlGroup>

        <ControlGroup label="flex-wrap">
          <SelectControl
            value={flexWrap}
            onChange={(v) => setFlexWrap(v as typeof flexWrap)}
            options={["nowrap", "wrap", "wrap-reverse"]}
          />
        </ControlGroup>

        <ControlGroup label={`gap: ${gap}px`}>
          <input
            type="range"
            min="0"
            max="32"
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="accent-primary h-8 w-full"
          />
        </ControlGroup>

        <ControlGroup label={`Items: ${itemCount}`}>
          <input
            type="range"
            min="1"
            max="8"
            value={itemCount}
            onChange={(e) => setItemCount(Number(e.target.value))}
            className="accent-primary h-8 w-full"
          />
        </ControlGroup>
      </div>

      {/* Preview */}
      <LayoutGroup>
        <motion.div
          layout
          style={containerStyle}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <AnimatePresence mode="popLayout">
            {Array.from({ length: itemCount }).map((_, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                  "flex shrink-0 items-center justify-center rounded-lg px-3 py-2 font-mono text-xs font-bold text-white shadow-md sm:px-4 sm:py-3 sm:text-sm",
                  itemColors[i % itemColors.length],
                )}
                style={{
                  minWidth: "48px",
                  minHeight: alignItems === "stretch" ? "auto" : "44px",
                }}
              >
                {i + 1}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* Generated CSS */}
      <div className="mt-4 sm:mt-6">
        <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
          Generated CSS
        </p>
        <pre className="overflow-x-auto rounded-lg bg-[#171717] p-3 font-mono text-xs text-emerald-400 sm:p-4 sm:text-sm">
          {`.container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
  gap: ${gap}px;
}`}
        </pre>
      </div>
    </div>
  );
}

// ============================================
// Interactive Property Demo
// ============================================

interface PropertyDemoProps {
  property:
    | "flex-direction"
    | "justify-content"
    | "align-items"
    | "flex-wrap"
    | "align-content"
    | "gap";
  title?: string;
  description?: string;
}

export function PropertyDemo({
  property,
  title,
  description,
}: PropertyDemoProps) {
  const config = getPropertyConfig(property);
  const [value, setValue] = useState(config.options[0]);

  const isAlignContent = property === "align-content";
  const isColumn =
    property === "flex-direction" &&
    (value === "column" || value === "column-reverse");

  const containerStyle: React.CSSProperties = {
    display: "flex",
    ...config.getStyle(value),
    flexWrap: isAlignContent ? "wrap" : undefined,
    minHeight: isColumn ? "240px" : isAlignContent ? "200px" : "100px",
    padding: "12px",
    backgroundColor: "hsl(var(--muted))",
    borderRadius: "12px",
    border: "2px dashed hsl(var(--border))",
    transition: "all 0.3s ease-out",
    overflow: "auto",
  };

  const itemCount = isAlignContent ? 9 : 3;
  const items = isAlignContent
    ? Array.from({ length: itemCount }, (_, i) => String.fromCharCode(65 + i))
    : ["A", "B", "C"];
  const colors = [
    "bg-blue-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-violet-500",
    "bg-cyan-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-teal-500",
  ];

  return (
    <div className="not-prose bg-card my-8 w-full rounded-xl border p-4 shadow-sm sm:p-6">
      <div className="mb-3 sm:mb-4">
        <h4 className="text-base font-bold text-balance sm:text-lg">
          {title || config.title}
        </h4>
        <p className="text-muted-foreground mt-1 text-xs text-pretty sm:text-sm">
          {description || config.description}
        </p>
      </div>

      {/* Option Buttons */}
      <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
        {config.options.map((option) => (
          <button
            key={option}
            onClick={() => setValue(option)}
            className={cn(
              "rounded-md border px-2 py-1 font-mono text-[10px] font-medium transition-all duration-150 sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-xs",
              value === option
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Preview */}
      <LayoutGroup>
        <motion.div
          layout
          style={containerStyle}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((letter, i) => (
            <motion.div
              key={letter}
              layout
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={cn(
                "flex shrink-0 items-center justify-center rounded-md px-3 py-2 font-mono text-xs font-bold text-white shadow-md sm:rounded-lg sm:px-4 sm:text-sm",
                colors[i % colors.length],
              )}
              style={{
                minWidth: isAlignContent ? "60px" : "44px",
                height:
                  property === "align-items" && !isAlignContent
                    ? [36, 52, 68][i] + "px"
                    : isAlignContent
                      ? "36px"
                      : "44px",
              }}
            >
              {letter}
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>

      {/* Current Value Display */}
      <div className="mt-3 overflow-x-auto rounded-lg bg-[#171717] px-3 py-2 sm:mt-4 sm:px-4">
        <code className="font-mono text-xs text-emerald-400 sm:text-sm">
          {property}: {value};
        </code>
      </div>
    </div>
  );
}

// ============================================
// Flex Item Properties Demo
// ============================================

interface FlexItemDemoProps {
  property: "flex-grow" | "flex-shrink" | "flex-basis" | "order" | "align-self";
  title?: string;
  description?: string;
}

export function FlexItemDemo({
  property,
  title,
  description,
}: FlexItemDemoProps) {
  const [itemValues, setItemValues] = useState<number[]>([0, 0, 0]);

  const config = getFlexItemConfig(property);

  const updateValue = (index: number, value: number) => {
    const newValues = [...itemValues];
    newValues[index] = value;
    setItemValues(newValues);
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "8px",
    padding: "12px",
    backgroundColor: "hsl(var(--muted))",
    borderRadius: "12px",
    border: "2px dashed hsl(var(--border))",
    minHeight: property === "align-self" ? "100px" : "70px",
    alignItems: property === "align-self" ? "flex-start" : "center",
    overflow: "auto",
  };

  const getItemStyle = (index: number): React.CSSProperties => {
    const value = itemValues[index];
    switch (property) {
      case "flex-grow":
        return { flexGrow: value, minWidth: "50px" };
      case "flex-shrink":
        return { flexShrink: value, minWidth: "50px", width: "120px" };
      case "flex-basis":
        return { flexBasis: value === 0 ? "auto" : `${value * 25}px` };
      case "order":
        return { order: value };
      case "align-self":
        const alignValues = [
          "auto",
          "flex-start",
          "flex-end",
          "center",
          "stretch",
        ];
        return {
          alignSelf: alignValues[value] as React.CSSProperties["alignSelf"],
          minHeight: value === 4 ? "auto" : "36px",
        };
      default:
        return {};
    }
  };

  const colors = ["bg-blue-500", "bg-emerald-500", "bg-amber-500"];
  const labels = ["A", "B", "C"];

  return (
    <div className="not-prose bg-card my-8 w-full rounded-xl border p-4 shadow-sm sm:p-6">
      <div className="mb-3 sm:mb-4">
        <h4 className="text-base font-bold text-balance sm:text-lg">
          {title || config.title}
        </h4>
        <p className="text-muted-foreground mt-1 text-xs text-pretty sm:text-sm">
          {description || config.description}
        </p>
      </div>

      {/* Controls for each item */}
      <div className="mb-3 grid grid-cols-3 gap-2 sm:mb-4 sm:gap-3">
        {[0, 1, 2].map((index) => (
          <div key={index} className="text-center">
            <label className="text-muted-foreground mb-1 block text-[10px] font-medium sm:text-xs">
              Item {labels[index]}
            </label>
            <input
              type="range"
              min={config.min}
              max={config.max}
              value={itemValues[index]}
              onChange={(e) => updateValue(index, Number(e.target.value))}
              className="accent-primary h-6 w-full sm:h-8"
            />
            <span className="mt-1 block font-mono text-[10px] sm:text-xs">
              {property === "align-self"
                ? ["auto", "start", "end", "center", "stretch"][
                    itemValues[index]
                  ]
                : property === "flex-basis" && itemValues[index] === 0
                  ? "auto"
                  : itemValues[index]}
            </span>
          </div>
        ))}
      </div>

      {/* Preview */}
      <LayoutGroup>
        <motion.div
          layout
          style={containerStyle}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              layout
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={cn(
                "flex shrink-0 items-center justify-center rounded-md px-3 py-2 font-mono text-xs font-bold text-white shadow-md sm:rounded-lg sm:px-4 sm:py-3 sm:text-sm",
                colors[index],
              )}
              style={getItemStyle(index)}
            >
              {labels[index]}
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>

      {/* Generated CSS */}
      <div className="mt-3 space-y-0.5 overflow-x-auto rounded-lg bg-[#171717] p-3 sm:mt-4 sm:space-y-1 sm:p-4">
        {[0, 1, 2].map((index) => (
          <code
            key={index}
            className="block font-mono text-[10px] whitespace-nowrap text-emerald-400 sm:text-xs"
          >
            .item-{labels[index].toLowerCase()} {"{"} {property}:{" "}
            {property === "align-self"
              ? ["auto", "flex-start", "flex-end", "center", "stretch"][
                  itemValues[index]
                ]
              : property === "flex-basis" && itemValues[index] === 0
                ? "auto"
                : property === "flex-basis"
                  ? `${itemValues[index] * 25}px`
                  : itemValues[index]}
            ; {"}"}
          </code>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Visual Comparison Demo
// ============================================

interface ComparisonDemoProps {
  leftLabel: string;
  rightLabel: string;
  leftStyle: React.CSSProperties;
  rightStyle: React.CSSProperties;
  title?: string;
  description?: string;
}

export function ComparisonDemo({
  leftLabel,
  rightLabel,
  leftStyle,
  rightStyle,
  title,
  description,
}: ComparisonDemoProps) {
  const baseContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "6px",
    padding: "12px",
    backgroundColor: "hsl(var(--muted))",
    borderRadius: "12px",
    border: "2px dashed hsl(var(--border))",
    minHeight: "80px",
    overflow: "auto",
  };

  const items = ["A", "B", "C"];
  const colors = ["bg-blue-500", "bg-emerald-500", "bg-amber-500"];

  return (
    <div className="not-prose bg-card my-8 w-full rounded-xl border p-4 shadow-sm sm:p-6">
      {title && (
        <div className="mb-3 sm:mb-4">
          <h4 className="text-base font-bold text-balance sm:text-lg">
            {title}
          </h4>
          {description && (
            <p className="text-muted-foreground mt-1 text-xs text-pretty sm:text-sm">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-muted-foreground mb-2 text-center text-[10px] font-semibold tracking-wide uppercase sm:text-xs">
            {leftLabel}
          </p>
          <div style={{ ...baseContainerStyle, ...leftStyle }}>
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold text-white shadow-md sm:size-11 sm:rounded-lg sm:text-sm",
                  colors[i],
                )}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-muted-foreground mb-2 text-center text-[10px] font-semibold tracking-wide uppercase sm:text-xs">
            {rightLabel}
          </p>
          <div style={{ ...baseContainerStyle, ...rightStyle }}>
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.1 + i * 0.08,
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold text-white shadow-md sm:size-11 sm:rounded-lg sm:text-sm",
                  colors[i],
                )}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================
// Helper Components
// ============================================

function ControlGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-muted-foreground mb-1.5 block text-xs font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}

function SelectControl({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border-border bg-background focus:border-primary focus:ring-primary w-full rounded-lg border px-3 py-2 font-mono text-sm focus:ring-1 focus:outline-none"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// ============================================
// Configuration Helpers
// ============================================

function getPropertyConfig(property: PropertyDemoProps["property"]) {
  const configs: Record<
    PropertyDemoProps["property"],
    {
      title: string;
      description: string;
      options: string[];
      getStyle: (value: string) => React.CSSProperties;
    }
  > = {
    "flex-direction": {
      title: "flex-direction",
      description:
        "Defines the direction of the main axis. Items flow along this axis.",
      options: ["row", "row-reverse", "column", "column-reverse"],
      getStyle: (value: string) => ({
        flexDirection: value as React.CSSProperties["flexDirection"],
      }),
    },
    "justify-content": {
      title: "justify-content",
      description:
        "Aligns items along the main axis (horizontal for row, vertical for column).",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      getStyle: (value: string) => ({
        justifyContent: value as React.CSSProperties["justifyContent"],
      }),
    },
    "align-items": {
      title: "align-items",
      description:
        "Aligns items along the cross axis (vertical for row, horizontal for column).",
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      getStyle: (value: string) => ({
        alignItems: value as React.CSSProperties["alignItems"],
      }),
    },
    "align-content": {
      title: "align-content",
      description:
        "Aligns multiple lines of flex items along the cross axis. Only works when flex-wrap is enabled.",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "stretch",
      ],
      getStyle: (value: string) => ({
        alignContent: value as React.CSSProperties["alignContent"],
      }),
    },
    "flex-wrap": {
      title: "flex-wrap",
      description:
        "Controls whether items wrap to new lines when they overflow the container.",
      options: ["nowrap", "wrap", "wrap-reverse"],
      getStyle: (value: string) => ({
        flexWrap: value as React.CSSProperties["flexWrap"],
      }),
    },
    gap: {
      title: "gap",
      description: "Sets the spacing between flex items.",
      options: ["0px", "8px", "16px", "24px", "32px"],
      getStyle: (value: string) => ({ gap: value }),
    },
  };
  return configs[property];
}

function getFlexItemConfig(property: FlexItemDemoProps["property"]) {
  const configs = {
    "flex-grow": {
      title: "flex-grow",
      description:
        "Determines how much an item can grow relative to other items when there's extra space.",
      min: 0,
      max: 3,
    },
    "flex-shrink": {
      title: "flex-shrink",
      description:
        "Determines how much an item can shrink relative to other items when space is limited.",
      min: 0,
      max: 3,
    },
    "flex-basis": {
      title: "flex-basis",
      description:
        "Sets the initial main size of an item before growing or shrinking.",
      min: 0,
      max: 5,
    },
    order: {
      title: "order",
      description:
        "Changes the visual order of items without changing the HTML order.",
      min: -2,
      max: 2,
    },
    "align-self": {
      title: "align-self",
      description: "Overrides the container's align-items for a specific item.",
      min: 0,
      max: 4,
    },
  };
  return configs[property];
}

// ============================================
// Simple Visual Example (Static)
// ============================================

interface SimpleFlexDemoProps {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "stretch" | "flex-start" | "center" | "flex-end";
  wrap?: boolean;
  gap?: number;
  height?: number;
  caption?: string;
}

export function SimpleFlexDemo({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = false,
  gap = 8,
  height = 80,
  caption,
}: SimpleFlexDemoProps) {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap ? "wrap" : "nowrap",
    gap: `${gap}px`,
    minHeight: `${height}px`,
    padding: "12px",
    backgroundColor: "hsl(var(--muted))",
    borderRadius: "12px",
    border: "2px dashed hsl(var(--border))",
    overflow: "auto",
  };

  const items = ["A", "B", "C"];
  const colors = ["bg-blue-500", "bg-emerald-500", "bg-amber-500"];

  return (
    <div className="not-prose my-6 w-full">
      <motion.div
        style={containerStyle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className={cn(
              "flex shrink-0 items-center justify-center rounded-md px-3 py-2 font-mono text-xs font-bold text-white shadow-md sm:rounded-lg sm:px-4 sm:py-3 sm:text-sm",
              colors[i],
            )}
            style={{ minWidth: "44px" }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
      {caption && (
        <p className="text-muted-foreground mt-2 text-center text-[10px] italic sm:text-xs">
          {caption}
        </p>
      )}
    </div>
  );
}

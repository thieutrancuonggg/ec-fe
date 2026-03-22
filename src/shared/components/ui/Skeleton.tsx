import { Skeleton as AntSkeleton } from "antd";

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Skeleton({ className, style }: SkeletonProps) {
  return (
    <div className={className} style={{ ...style, overflow: "hidden" }}>
      <AntSkeleton.Input active block style={{ height: "100%", minHeight: 20, ...style }} />
    </div>
  );
}

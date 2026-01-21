import { brand } from "@/lib/brand";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Logo Placeholder */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
          <span className="text-2xl font-bold text-primary">L</span>
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Text */}
        <p className="text-muted-foreground text-sm">{brand.name}</p>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertCircle className="size-10 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          We apologize for the inconvenience. Please try again or contact us if
          the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset}>
            <RefreshCw className="size-4" />
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <a href="/">
              <Home className="size-4" />
              Go Home
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          Need help? Contact us via{" "}
          <a
            href={brand.contact.whatsappLink}
            className="text-primary hover:underline"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}

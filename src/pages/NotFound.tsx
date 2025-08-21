import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid like homepage */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-7xl font-extrabold text-primary mb-4 drop-shadow-glow">
          404
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Button
          onClick={() => (window.location.href = "/")}
          className="bg-primary hover:bg-primary/90 shadow-glow hover:shadow-card transition-all"
        >
          Return Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;

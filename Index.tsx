import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.replace("/gully-maps.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <p>Loading Gully Maps…</p>
    </div>
  );
};

export default Index;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <span className="text-6xl font-bold text-primary">404</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Page Not Found
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sorry, we couldn't find the page you're looking for. 
              The page might have been moved, deleted, or the URL might be incorrect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="btn-secondary px-6 py-3"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
              
              <Button
                onClick={() => window.location.href = '/'}
                className="btn-cta px-6 py-3"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

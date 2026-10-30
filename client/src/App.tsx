import { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NotFound from "@/pages/NotFound";

const HomePage = lazy(() => import("@/pages/Home"));
const BlogPage = lazy(() => import("@/pages/Blog"));
const BlogPostPage = lazy(() => import("@/pages/BlogPost"));
const RegistroPage = lazy(() => import("@/pages/Registro"));
const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const ProfessionalPreviewPage = lazy(() => import("@/pages/ProfessionalPreview"));
const ProfessionalDetailPage = lazy(() => import("@/pages/ProfessionalDetail"));
const CategoryPage = lazy(() => import("@/pages/CategoryPage"));
const CityHubPage = lazy(() => import("@/pages/CityHub"));
const ComoFuncionaClientesPage = lazy(() => import("@/pages/ComoFuncionaClientes"));
const ComoFuncionaProfesionalesPage = lazy(() => import("@/pages/ComoFuncionaProfesionales"));
const ComoVerificamosPage = lazy(() => import("@/pages/ComoVerificamos"));

const pageTitles: Record<string, string> = {
  "/": "ProLocal — Profesionales locales en Galicia",
  "/blog": "Consejos para tu hogar y tu oficio en Galicia | ProLocal",
  "/profesionales/registro": "Registro profesional | ProLocal",
  "/profesionales/dashboard": "Panel profesional | ProLocal",
  "/profesionales/vista-previa": "Vista previa local de mi ficha | ProLocal",
  "/como-funcionamos": "Cómo funciona ProLocal para clientes | ProLocal",
  "/como-funciona-profesionales": "Cómo funciona para profesionales | ProLocal",
  "/como-verificamos": "Cómo verificamos | ProLocal",
};

function RouteEffects() {
  const [location] = useLocation();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const scrollToCurrentHash = () => {
      const targetId = window.location.hash.slice(1);
      if (!targetId) return;

      let attempts = 0;
      const findAndScroll = () => {
        const target = document.getElementById(decodeURIComponent(targetId));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (attempts < 10) {
          attempts += 1;
          timer = setTimeout(findAndScroll, 50);
        }
      };
      findAndScroll();
    };

    window.addEventListener("hashchange", scrollToCurrentHash);
    return () => {
      window.removeEventListener("hashchange", scrollToCurrentHash);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (location.startsWith("/blog/") && location !== "/blog/profesionales") document.title = "Artículo | ProLocal";
    else if (pageTitles[location]) document.title = pageTitles[location];

    const targetId = window.location.hash.slice(1);
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;
    const scrollToTarget = () => {
      const target = document.getElementById(decodeURIComponent(targetId));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts < 10) {
        attempts += 1;
        timer = setTimeout(scrollToTarget, 50);
      }
    };
    scrollToTarget();
    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <RouteEffects />
      <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/25 border-t-primary" aria-label="Cargando" /></div>}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/blog" component={() => <BlogPage />} />
          {/* Client-side fallback; HTTP 301 rules also ship in public/_redirects. */}
          <Route path="/blog/profesionales" component={() => <Redirect to="/blog" replace />} />
          <Route path="/blog/:slug" component={BlogPostPage} />
          <Route path="/profesionales/registro" component={RegistroPage} />
          <Route path="/profesionales/dashboard" component={DashboardPage} />
          <Route path="/profesionales/vista-previa" component={ProfessionalPreviewPage} />
          <Route path="/como-funcionamos" component={ComoFuncionaClientesPage} />
          <Route path="/como-funciona-profesionales" component={ComoFuncionaProfesionalesPage} />
          <Route path="/como-verificamos" component={ComoVerificamosPage} />
          <Route path="/vigo" component={() => <CityHubPage cityId="vigo" />} />
          <Route path="/a-coruna" component={() => <CityHubPage cityId="a-coruna" />} />
          <Route path="/santiago-de-compostela" component={() => <CityHubPage cityId="santiago-de-compostela" />} />
          <Route path="/profesionales/:province/:category/:slug" component={ProfessionalDetailPage} />
          <Route path="/:city/:category/:slug" component={ProfessionalDetailPage} />
          <Route path="/:city/:category" component={CategoryPage} />
          <Route path="/:category" component={CategoryPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

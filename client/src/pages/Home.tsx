import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Categories } from "@/components/categories"
import { MapResultsSection } from "@/components/map-results-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { PricingSection } from "@/components/pricing-section"
import { BlogPreview } from "@/components/blog-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return <main className="min-h-screen bg-background"><Header /><Hero /><HowItWorks /><Categories /><MapResultsSection /><DashboardPreview /><PricingSection /><BlogPreview /><Footer /></main>
}

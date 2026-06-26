import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { projects } from "@/lib/projects-data"

export const metadata = {
  title: "Projets | Djoundi Bakari",
  description: "Découvrez tous les projets réalisés par Djoundi Bakari dans le cadre de sa formation Epitech Lyon.",
}

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Mes réalisations
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Projets réalisés dans le cadre de ma formation Web@cadémie à Epitech Lyon et en autonomie.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
              {projects.length} projets
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h2 className="text-lg font-bold text-foreground mt-1">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-md border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                    aria-label={`GitHub — ${project.title}`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all flex-1 justify-center"
                  >
                    Voir le site
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

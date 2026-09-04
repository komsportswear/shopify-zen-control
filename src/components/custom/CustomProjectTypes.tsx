import { ArrowRight } from "lucide-react";
import { projectTypes } from "./data";
import { trackEvent } from "@/lib/analytics";

interface Props {
  onSelect: (value: string) => void;
}

const CustomProjectTypes = ({ onSelect }: Props) => (
  <section id="proyectos-tipo" className="bg-background py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <h2 className="mb-12 max-w-2xl text-3xl font-bold tracking-tighter md:text-5xl">¿QUÉ QUIERES CREAR?</h2>

      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        {projectTypes.map((t) => (
          <button
            key={t.value}
            onClick={() => {
              trackEvent("select_project_type", { project_type: t.value });
              onSelect(t.value);
            }}
            className="group flex flex-col items-start gap-4 bg-background p-8 text-left transition-colors hover:bg-kom-surface lg:p-12"
          >
            <h3 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">{t.title}</h3>
            <p className="max-w-md text-muted-foreground">{t.description}</p>
            <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent">
              {t.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default CustomProjectTypes;

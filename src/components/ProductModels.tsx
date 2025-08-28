import { useMemo } from "react";

type Step = {
  src: string;
  caption: string;
};

type SetupGroup = {
  title: string;
  steps: Step[];
};

const buildTwoSeaterSteps = (): Step[] => {
  return Array.from({ length: 9 }).map((_, idx) => {
    const stepNumber = idx + 1;
    return {
      src: `/2seater-scematics/${stepNumber}.jpg`,
      caption: `Step ${stepNumber}`,
    } as Step;
  });
};

const buildLuganoTableSteps = (): Step[] => {
  // The files are named "1 (1).jpg" to "4 (1).jpg"
  return [1, 2, 3, 4].map((n) => ({
    src: `/lugano-table/${n} (1).jpg`,
    caption: `Step ${n}`,
  }));
};

const buildLuganoSingleSteps = (): Step[] => {
  return Array.from({ length: 7 }).map((_, idx) => {
    const stepNumber = idx + 1;
    return {
      src: `/Lugano Single Setup/${stepNumber}.png`,
      caption: `Step ${stepNumber}`,
    } as Step;
  });
};

const buildSantoriniArmchairSteps = (): Step[] => {
  return Array.from({ length: 8 }).map((_, idx) => {
    const stepNumber = idx + 1;
    return {
      src: `/Santorini Armchair Setup/${stepNumber}.png`,
      caption: `Step ${stepNumber}`,
    } as Step;
  });
};

const ProductModels = () => {
  const groups: SetupGroup[] = useMemo(
    () => [
      {
        title: "Lugano table setup",
        steps: buildLuganoTableSteps(),
      },
      {
        title: "Lugano Single Setup",
        steps: buildLuganoSingleSteps(),
      },
      {
        title: "Santorini Armchair Setup",
        steps: buildSantoriniArmchairSteps(),
      },
      {
        title: "2seater Lugano setup",
        steps: buildTwoSeaterSteps(),
      },
    ],
    []
  );

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold">Product Models</h2>
          <p className="text-sm md:text-base mt-2 md:mt-3 text-muted-foreground">
            Step-by-step arrangement manuals
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {groups.map((group) => (
            <section key={group.title}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {group.steps.map((step) => (
                  <figure
                    key={`${group.title}-${step.caption}`}
                    className="rounded-xl overflow-hidden border bg-white"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={step.src}
                        alt={`${group.title} - ${step.caption}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <figcaption className="p-3 text-sm font-medium">
                      {step.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModels;



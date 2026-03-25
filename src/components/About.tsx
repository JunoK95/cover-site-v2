import { useSectionFade } from "../hooks/useSectionFade";

export default function About() {
  const ref = useSectionFade();
  return (
    <section
      ref={ref}
      id="about"
      className="border-b border-gray-200 section-reveal"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 border-b border-gray-200">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          About
        </span>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Photo */}
          <div className="flex items-start justify-center">
            <div className="h-64 aspect-4/4 relative overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Juno Kim"
                className="absolute inset-0 w-full h-full object-cover rounded-lg reveal-child"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center gap-5">
            <p
              className="text-xs text-gray-500 leading-relaxed reveal-child"
              style={{ transitionDelay: "0.2s" }}
            >
              I'm a frontend developer with a passion for building clean,
              performant web experiences. I believe great software is the result
              of attention to detail, clear thinking, and a deep respect for the
              end user.
            </p>
            <p
              className="text-xs text-gray-500 leading-relaxed reveal-child"
              style={{ transitionDelay: "0.35s" }}
            >
              With experience across the full frontend stack — from component
              architecture to deployment pipelines — I bring both technical
              depth and design sensibility to every project I work on.
            </p>

            <div
              className="border-t border-gray-200 pt-6 mt-2 reveal-child"
              style={{ transitionDelay: "0.65s" }}
            >
              <dl className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <dt className="text-gray-400 uppercase tracking-widest mb-1">
                    Based in
                  </dt>
                  <dd className="text-gray-700">Salt Lake City, USA</dd>
                </div>
                <div>
                  <dt className="text-gray-400 uppercase tracking-widest mb-1">
                    Experience
                  </dt>
                  <dd className="text-gray-700">7+ Years</dd>
                </div>
                <div>
                  <dt className="text-gray-400 uppercase tracking-widest mb-1">
                    Focus
                  </dt>
                  <dd className="text-gray-700">Frontend / UI</dd>
                </div>
                <div>
                  <dt className="text-gray-400 uppercase tracking-widest mb-1">
                    Status
                  </dt>
                  <dd className="text-gray-700 flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Open to work
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

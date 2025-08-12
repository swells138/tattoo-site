import Link from "next/link";
import Image from "next/image";
import GalleryClient from "./components/GalleryClient.jsx";
import Testimonials from "./components/Testimonials.jsx";

const tattoos = [
  // tag each piece so the gallery can filter
  { src: "/images/tattoo6.png", alt: "Panther and heart dagger", category: "Traditional" },
  { src: "/images/tattoo2.png", alt: "Ship, roses, and dog flash", category: "Traditional" },
  { src: "/images/tattoo3.png", alt: "Woman portrait with tiger flash", category: "Flash" },
  { src: "/images/tattoo4.png", alt: "Anchor with banner and roses", category: "Traditional" },
  { src: "/images/tattoo1.png", alt: "Shoulder flowers with dagger", category: "Black & Grey" },
  { src: "/images/tattoo5.png", alt: "Tiger head with lettering", category: "Flash" },
];

// flash items (could be a subset or separate images)
const flash = [
  { src: "/images/tattoo3.png", alt: "Lady & tiger flash" },
  { src: "/images/tattoo5.png", alt: "Tiger head flash" },
  { src: "/images/tattoo2.png", alt: "Ship & roses flash" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="font-bold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 bg-clip-text text-transparent">
              Sydney’s Tattoo Studio
            </span>
          </Link>
          <div className="hidden gap-6 sm:flex text-sm text-red-300">
            <a href="#gallery" className="hover:text-red-200">Gallery</a>
            <a href="#flash" className="hover:text-red-200">Flash</a>
            <a href="#about" className="hover:text-red-200">About</a>
            <a href="#reviews" className="hover:text-red-200">Reviews</a>
            <a href="#book" className="hover:text-red-200">Book</a>
          </div>
        </nav>
      </header>

      {/* Hero (cinematic) */}
      <section className="relative isolate">
        {/* background image or looped video — swap to <video> if you have one */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/tattoo6.png"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-28 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 bg-clip-text text-transparent">
            Bold, timeless tattoos.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-red-200/90">
            Clean lines, solid color, and designs that age beautifully.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#book"
              className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Book Now
            </a>
            <a
              href="#gallery"
              className="rounded-lg px-6 py-3 font-medium text-red-300 ring-1 ring-white/15 hover:text-white hover:ring-red-400/40"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* Gallery with filters + lightbox (client) */}
      <section id="gallery" className="mx-auto max-w-6xl px-5 pb-6 pt-16">
        <h2 className="mb-6 text-center text-3xl font-semibold text-red-500">Gallery</h2>
        <p className="mb-6 text-center text-red-200/80">
          Browse by style or view everything. Click any piece to open it.
        </p>
        <GalleryClient items={tattoos} />
      </section>

      {/* Flash section */}
      <section id="flash" className="bg-gray-900/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-red-500">Available Flash</h2>
            <p className="mt-2 text-red-200/80">
              Reserve a design and book directly—limited availability.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {flash.map((f, i) => (
              <div key={i} className="group overflow-hidden rounded-xl ring-1 ring-white/10">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-red-200">{f.alt}</span>
                  <a
                    href="#book"
                    className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium hover:bg-red-500"
                  >
                    Book this
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
            {/* Swap to your portrait/studio shot */}
            <Image src="/images/tattoo1.png" alt="Sydney in the studio" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-500">About the Artist</h2>
            <p className="mt-4 text-red-200/90">
              I’m Sydney—specializing in bold traditional, clean linework, and designs rooted in
              classic Americana. I focus on readability, longevity, and a comfortable studio
              experience from consult to aftercare.
            </p>
            <ul className="mt-6 space-y-2 text-red-200/80">
              <li>• Custom and flash available</li>
              <li>• Healed-work focus and proper aftercare</li>
              <li>• Small to medium pieces typically 1–3 hours</li>
            </ul>
            <a
              href="#book"
              className="mt-6 inline-block rounded-lg bg-red-600 px-5 py-3 font-medium hover:bg-red-500"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-gray-900/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="mb-8 text-center text-3xl font-semibold text-red-500">Client Reviews</h2>
          <Testimonials />
        </div>
      </section>

      {/* Booking + contact */}
      <section id="book" className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-red-500">Book an Appointment</h2>
        <p className="text-red-200">
          Ready for your next tattoo? Flash and custom pieces available.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://booking.example.com"
            className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Book a Session
          </a>
          <a
            href="mailto:artist@example.com"
            className="rounded-lg px-5 py-3 font-medium text-red-300 ring-1 ring-white/15 hover:text-white hover:ring-red-400/40"
          >
            Email the Studio
          </a>
          <a
            href="https://instagram.com/inkartist"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-5 py-3 font-medium text-red-300 ring-1 ring-white/15 hover:text-white hover:ring-red-400/40"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Sticky floating CTA */}
      <a
        href="#book"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold shadow-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Book Now
      </a>

      <footer className="border-t border-white/10 py-8 text-center text-red-400">
        © {new Date().getFullYear()} Sydney — All rights reserved.
      </footer>
    </div>
  );
}

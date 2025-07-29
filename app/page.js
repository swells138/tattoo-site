import Image from "next/image";

const tattoos = [
  "/images/tattoo6.png",
  "/images/tattoo2.png",
  "/images/tattoo3.png",
  "/images/tattoo4.png",
  "/images/tattoo1.png",
  "/images/tattoo5.png",
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-black text-white flex flex-col">
      <section className="flex flex-col items-center justify-center py-24 text-center bg-gradient-to-b from-gray-900 to-black px-4">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Ink Portfolio
        </h1>
        <p className="mt-4 text-lg max-w-xl text-gray-300">
          A selection of recent tattoos and designs.
        </p>
      </section>

      <section className="p-8 sm:p-16 flex-1">
        <h2 className="text-3xl font-semibold mb-8 text-center">Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tattoos.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Tattoo ${idx + 1}`}
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          ))}
        </div>
      </section>

      <section className="p-8 sm:p-16 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Book an Appointment</h2>
        <p className="mb-2">
          Ready for your next tattoo?{' '}
          <a
            href="https://booking.example.com"
            className="text-purple-400 underline"
          >
            Book a session here
          </a>
          .
        </p>
        <p>
          Email:{' '}
          <a href="mailto:artist@example.com" className="underline">
            artist@example.com
          </a>
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://instagram.com/inkartist" className="underline">
            Instagram
          </a>
          <a href="https://facebook.com/inkartist" className="underline">
            Facebook
          </a>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400">
        © 2025 Ink Portfolio
      </footer>
    </div>
  );
}

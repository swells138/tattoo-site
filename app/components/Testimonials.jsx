export default function Testimonials() {
  const items = [
    {
      name: "Alex P.",
      text:
        "Clean lines, gentle hand, and the piece healed perfectly. Sydney listened to my ideas and made them better.",
    },
    {
      name: "Marina G.",
      text:
        "Booked a flash and it came out exactly like the design—colors are so solid. Can’t wait for my next one.",
    },
    {
      name: "Jordan R.",
      text:
        "Professional from consult to aftercare. Studio felt welcoming and the tattoo still looks crisp months later.",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((t, i) => (
        <figure key={i} className="rounded-xl border border-white/10 bg-black/30 p-5">
          <blockquote className="text-red-100/90">“{t.text}”</blockquote>
          <figcaption className="mt-3 text-sm text-red-300">— {t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

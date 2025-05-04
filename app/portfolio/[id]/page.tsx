import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const portfolioItems = [
  {
    id: 1,
    title: "Vinyl Fence Installation",
    image: "/images/fence-vinyl.jpg",
    description: "A durable white vinyl fence designed for privacy and low maintenance.",
  },
  {
    id: 2,
    title: "Wooden Fence Project",
    image: "/images/fence-wood.jpg",
    description: "A rustic wood fence for a warm, natural look around your home.",
  },
  {
    id: 3,
    title: "Fence Summary Showcase",
    image: "/images/fence-summary.jpg",
    description: "Various types of fences installed on different properties.",
  },
  {
    id: 4,
    title: "Modern Vinyl Build",
    image: "/images/ence-vinyl.jpg",
    description: "Modern vinyl fence that complements a contemporary home.",
  },
  {
    id: 5,
    title: "Premium Backyard Fence",
    image: "/images/fance1.jpeg",
    description: "Premium backyard wood fence providing privacy and beauty.",
  },
  {
    id: 6,
    title: "Clean White Fence Finish",
    image: "/images/engine.png",
    description: "Sleek white vinyl fence surrounding a home garden.",
  },
  {
    id: 7,
    title: "Classic Fence Style",
    image: "/images/fence.png",
    description: "Traditional fence design with sturdy materials and clean finish.",
  },
  {
    id: 8,
    title: "Next-Gen Vinyl Fence",
    image: "/images/newFence.png",
    description: "Modern, durable fence design with next-gen materials.",
  },
  {
    id: 9,
    title: "Stylish Privacy Fence",
    image: "/images/fance2.jpeg",
    description: "Elegant privacy fencing with natural wood aesthetics.",
  },
  {
    id: 10,
    title: "Engineered Fence Concept",
    image: "/images/engine.png",
    description: "A showcase of engineered fencing used in various installations.",
  },
];

export default async function PortfolioPage(props: { params: Promise<{ id: string }> }) {

  const { id } = await props.params;
  const item = portfolioItems.find((i) => i.id.toString() === id.toString());

  if (!item) return notFound();

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* <Link
          href="/portfolio"
          className="inline-block mb-6 text-sm text-blue-600 hover:underline"
        >
          ← Back to Portfolio
        </Link> */}

        <Link
          href="/portfolio"
          className="inline-block mb-6 text-sm text-blue-600 hover:underline"
        >
        <Button
          className=" !bg-white !text-primary border border-primary contained w-full max-w-[600px] !text-2xl !h-[65px] !rounded-[14px] xxl:!h-12 xxl:!text-lg"
          aria-label="Back to Portfolio"
        >
          ← Back to Portfolio
        </Button>
        </Link> 



        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="relative w-full h-[450px] sm:h-[300px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-primary">{item.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed text-primary">
              {item.description}
            </p>

            <div className="mt-6 text-gray-500 text-base space-y-4 text-primary">
              <p>
                This project highlights our commitment to quality craftsmanship,
                premium materials, and long-lasting design. Every fence is
                tailored to suit the homeowner’s style and privacy needs.
              </p>
              <p>
                We ensure proper installation and attention to detail that
                enhances curb appeal and increases property value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

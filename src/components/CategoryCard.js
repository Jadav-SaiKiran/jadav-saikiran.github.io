import Link from 'next/link';
import Image from 'next/image';

export default function CategoryCard({ category }) {
  return (
    <Link href={`/products?category=${category.id}`} className="group">
      <div className="relative h-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-3xl font-bold text-white mb-2">
            {category.name}
          </h3>
          <p className="text-white/90 text-lg">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

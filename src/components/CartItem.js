'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-6 border-b">
      <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">
            Size: {item.selectedSize} | Color: {item.selectedColor}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              -
            </button>
            <span className="text-gray-900 font-medium w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              +
            </button>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
              className="text-sm text-red-600 hover:text-red-800 transition-colors mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

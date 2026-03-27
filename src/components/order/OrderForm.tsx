"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCart } from "@/lib/cart-context";
import { getPickupSlots } from "@/lib/constants";
import { createOrder } from "@/lib/supabase";
import NeonButton from "../ui/NeonButton";

const orderSchema = z.object({
  name: z.string().min(2, "Nom requis (min 2 caractères)"),
  phone: z.string().min(10, "Numéro de téléphone valide requis"),
  pickupTime: z.string().min(1, "Choisissez un créneau"),
  comment: z.string().optional(),
});

type OrderData = z.infer<typeof orderSchema>;

interface OrderFormProps {
  onConfirm: (orderNumber: string) => void;
}

function generateOrderNumber(): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `BRN-${num}`;
}

export default function OrderForm({ onConfirm }: OrderFormProps) {
  const { items, total, clearCart } = useCart();
  const slots = getPickupSlots();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderData>();

  const onSubmit = async (data: OrderData) => {
    setSubmitError(null);
    const orderNum = generateOrderNumber();

    // Persist to Supabase
    const result = await createOrder({
      order_number: orderNum,
      customer_name: data.name,
      customer_phone: data.phone,
      pickup_time: data.pickupTime,
      comment: data.comment || null,
      items: items.map((i) => ({ id: i.id, cartId: i.cartId, name: i.name, price: i.price, quantity: i.quantity, options: i.options })),
      total,
    });

    if (!result) {
      // Fallback to localStorage if Supabase fails
      const order = { number: orderNum, items, total, ...data, createdAt: new Date().toISOString() };
      const orders = JSON.parse(localStorage.getItem("brn-orders") || "[]");
      orders.push(order);
      localStorage.setItem("brn-orders", JSON.stringify(orders));
    }

    clearCart();
    onConfirm(orderNum);
  };

  return (
    <div>
      <h2
        className="font-display text-2xl font-bold tracking-wider text-neon-cyan"
        style={{ textShadow: "0 0 10px rgba(0, 240, 255, 0.3)" }}
      >
        FINALISER LA COMMANDE
      </h2>

      {/* Order summary */}
      <div className="mt-6 rounded-lg border border-white/5 bg-bg-card p-4">
        <h3 className="mb-3 font-display text-xs uppercase tracking-wider text-text-secondary">
          Récapitulatif
        </h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between text-sm">
              <span className="text-text-primary">
                {item.quantity}x {item.name}
              </span>
              <span className="text-text-secondary">
                {(item.price * item.quantity).toFixed(2)}€
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3 border-t border-white/5 pt-3 flex justify-between">
          <span className="font-display text-sm uppercase text-text-secondary">Total</span>
          <span className="font-pixel text-sm text-neon-yellow">{total.toFixed(2)}€</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-wider text-text-secondary">
            Nom
          </label>
          <input
            {...register("name", { required: "Nom requis", minLength: { value: 2, message: "Min 2 caractères" } })}
            className="w-full rounded-lg border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-neon-cyan"
            placeholder="Votre nom"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-neon-pink">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-wider text-text-secondary">
            Téléphone
          </label>
          <input
            {...register("phone", { required: "Téléphone requis", minLength: { value: 10, message: "Min 10 chiffres" } })}
            type="tel"
            className="w-full rounded-lg border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-neon-cyan"
            placeholder="06 XX XX XX XX"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-neon-pink">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-wider text-text-secondary">
            Heure de retrait
          </label>
          <select
            {...register("pickupTime", { required: "Choisissez un créneau" })}
            className="w-full rounded-lg border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-neon-cyan"
          >
            <option value="">Choisir un créneau</option>
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.pickupTime && (
            <p className="mt-1 text-xs text-neon-pink">{errors.pickupTime.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-wider text-text-secondary">
            Commentaire (optionnel)
          </label>
          <textarea
            {...register("comment")}
            rows={3}
            className="w-full rounded-lg border border-white/10 bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-neon-cyan resize-none"
            placeholder="Allergies, demandes spéciales..."
          />
        </div>

        <NeonButton
          type="submit"
          variant="pink"
          size="lg"
          className="w-full"
          disabled={isSubmitting || items.length === 0}
        >
          CONFIRMER LA COMMANDE
        </NeonButton>
      </form>
    </div>
  );
}

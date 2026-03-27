import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zswflqdiqdvgmyfqegxx.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzd2ZscWRpcWR2Z215ZnFlZ3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MTQ4MzcsImV4cCI6MjA5MDE5MDgzN30.y0MOjh6zoGSC1fR0BxzK3m8kLCq4Y5kkDdAgEutc-WY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface OrderRow {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  pickup_time: string;
  comment: string | null;
  items: { id: string; name: string; price: number; quantity: number }[];
  total: number;
  status: string;
  created_at: string;
}

export async function createOrder(order: Omit<OrderRow, "id" | "status" | "created_at">): Promise<OrderRow | null> {
  const { data, error } = await supabase
    .from("orders")
    .insert(order)
    .select()
    .single();

  if (error) {
    console.error("Error creating order:", error);
    return null;
  }
  return data as OrderRow;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts() {
  try {
    if (!API_URL) {
      throw new Error("API URL is undefined");
    }

    const res = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();

    return data.products;
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return [];
  }
}
